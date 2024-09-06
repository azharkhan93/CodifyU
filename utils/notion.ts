import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getProducts() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  const products = response.results.map((page: any) => {
    const imageUrl =
      page.properties["Files & media"]?.files?.[0]?.type === "external"
        ? page.properties["Files & media"].files[0].external.url
        : page.properties["Files & media"]?.files?.[0]?.file?.url || "";

    const productName =
      page.properties["Title"]?.rich_text?.[0]?.plain_text || "";

    const productDes =
      page.properties["Description"]?.rich_text?.[0]?.plain_text || "";

    const iconUrls = (page.properties["Icon1"]?.files || []).map((file: any) =>
      file.type === "external"
        ? file.external.url
        : file.file?.url || ""
    );

    return {
      imageUrl,
      productName,
      productDes,
      iconUrls, 
    };
  });

  return products;
}




