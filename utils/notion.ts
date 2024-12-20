import { customNotionClient, notion } from "./notionClient";
import { extractRichText } from "./richText";

export async function getBlogPosts() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    });

    const blogPosts = await Promise.all(
      response.results.map(async (page: any, index: number) => {
        // Log raw page data to inspect structure
        // console.log(`Raw Page Data (Index ${index}):`, page);

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

    const reversedBlogPosts = blogPosts.reverse();

    // console.log("Blog Posts (Reversed Order):", reversedBlogPosts);

    return reversedBlogPosts;
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

  return blocks;
}

export async function getCustomBlogPosts() {
  const response = await customNotionClient.databases.query({
    database_id: process.env.CUSTOM_DATABASE_ID!,
  });

  console.log("Raw Page Data:", response.results);

  return response.results.map((page: any) => {
    console.log("Page Data:", page);

    const file =
      page.properties["Files & media"]?.files?.[0]?.type === "external"
        ? page.properties["Files & media"].files[0].external.url
        : page.properties["Files & media"]?.files?.[0]?.file?.url || "";

    const title = page.properties.Name?.title?.[0]?.plain_text || "";
    const description = page.properties.Description?.rich_text?.[0]?.plain_text || "";

    const date = page.properties.Date?.date?.start || ""; 

  
    const author = page.properties.Author?.rich_text?.[0]?.plain_text || ""; 

    
    const iconUrl = page.properties.Author?.rich_text?.[0]?.text?.content || ""; 

    console.log("Mapped Data:", { title, description, date, author, iconUrl });

    return {
      id: page.id,
      title,
      file,
      description,
      date,
      author,
      iconUrl,
    };
  });
}
