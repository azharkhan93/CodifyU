import { notion } from "./notionClient";
import { extractRichText } from "./richText";

export async function getBlogPosts() {
  try {
   
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    });

    const blogPosts = await Promise.all(
      response.results.map(async (page: any) => {
        console.log("Raw Page Data:", page); 

     
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

        // Log individual fields for better visibility
        console.log("Page ID:", page.id);
        console.log("Slug:", slug);
        console.log("Product Name:", productName);
        console.log("Product Description:", productDesc);
        console.log("Image URL:", imageUrl);

        
        const descriptionBlocks = await getPageContent(page.id);
        const richTextData = extractRichText(descriptionBlocks);

        const productDesc1 = richTextData.join(" ") || "";

        // Extract and format icons
        const iconUrls = (page.properties["Icon1"]?.files || []).map(
          (file: any) =>
            file.type === "external" ? file.external.url : file.file?.url || ""
        );

        console.log("Icon URLs:", iconUrls); 

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

  return blocks;
}








// export async function getRichTextContent(slug: string) {
//   try {
//     const response = await notion.databases.query({
//       database_id: process.env.NOTION_DATABASE_ID!,
//       filter: {
//         property: "slug",
//         rich_text: {
//           equals: slug,
//         },
//       },
//     });

//     if (response.results.length === 0) {
//       throw new Error("No page found with the given slug.");
//     }

//     const pageId = response.results[0].id;

//     const blocksResponse = await notion.blocks.children.list({
//       block_id: pageId,
//     });

//     console.log("Blocks Response Data:", blocksResponse.results);

//     const richTextContent = blocksResponse.results.map((block: any) => {
//       console.log("Block Data:", block);

//       let content = {};

//       switch (block.type) {
//         case "heading_1":
//         case "heading_2":
//         case "heading_3":
//           console.log("Heading Block Detected:", block[block.type]); 
//           content = {
//             type: "heading",
//             text: block[block.type].rich_text?.map((textObj: any) => textObj.plain_text).join('') || "",
//           };
//           break;
//         case "paragraph":
//           console.log("Paragraph Block Detected:", block.paragraph); 
//           content = {
//             type: "paragraph",
//             text: block.paragraph.rich_text?.map((textObj: any) => textObj.plain_text).join('') || "",
//           };
//           break;
//         case "image":
//           console.log("Image Block Detected:", block.image); 
//           const imageUrl =
//             block.image.type === "external"
//               ? block.image.external.url
//               : block.image.file.url;

//           content = {
//             type: "image",
//             url: imageUrl,
//           };
//           break;
//         default:
//           console.log("Other Block Type Detected:", block.type, block);
//           break;
//       }

//       console.log("Extracted Content:", content);

//       return content;
//     });

//     console.log("Rich Text Content:", richTextContent);

//     return richTextContent;
//   } catch (error) {
//     console.error("Error fetching rich text content:", error);
//     throw error;
//   }
// }






