import { notion } from "./notionClient";
import { extractRichText } from "./richText";

export async function getBlogPosts() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    });

    const blogPosts = await Promise.all(
      response.results.map(async (page: any) => {
        // console.log("Raw Page Data:", page);

        const slug = page.properties["slug"]?.rich_text?.[0]?.plain_text || "";

        const imageUrl =
          page.properties["Files & media"]?.files?.[0]?.type === "external"
            ? page.properties["Files & media"].files[0].external.url
            : page.properties["Files & media"]?.files?.[0]?.file?.url || "";

        const productName =
          page.properties["Title"]?.title?.[0]?.plain_text ||
          page.properties["Name"]?.title?.[0]?.plain_text ||
          "";

        const productDesc =
          page.properties["Description"]?.rich_text?.[0]?.plain_text || "";

        const descriptionBlocks = await getPageContent(page.id);
        const richTextData = extractRichText(descriptionBlocks);

        const productDesc1 = richTextData.join(" ") || "";

        const iconUrls = (page.properties["Icon1"]?.files || []).map(
          (file: any) =>
            file.type === "external" ? file.external.url : file.file?.url || ""
        );

        return {
          id: page.id,
          productName,
          imageUrl,
          productDesc,
          productDesc1,
          slug,
          iconUrls,
        };
      })
    );

    return blogPosts;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw new Error("Failed to fetch blog posts.");
  }
}

async function getPageContent(pageId: string) {
  const blocks: any[] = [];
  let cursor: string | undefined = undefined;

  do {
    const { results, next_cursor } = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });
    blocks.push(...results);
    cursor = next_cursor ?? undefined;
  } while (cursor);

  // console.log("Page Content Blocks:", blocks);

  return blocks;
}
