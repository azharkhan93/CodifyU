import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getBlogPosts() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    // cache: 'no-store',
  });

  return response.results.map((page: any) => {
    const file =
      page.properties["Files & media"]?.files?.[0]?.type === "external"
        ? page.properties["Files & media"].files[0].external.url
        : page.properties["Files & media"]?.files?.[0]?.file?.url || "";

    const title = page.properties.Name?.title?.[0]?.plain_text || "";
    const description =
      page.properties.Description?.multi_select
        ?.map((item: any) => item.name)
        .join(", ") || "";

    return {
      id: page.id,
      title,
      file,
      description,
    };
  });
}

export async function getProducts(categoryFilter: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PRODUCTS_DATABASE_ID!,
  });

  return response.results
    .map((page: any) => {
      const imageUrl =
        page.properties["Files & media"]?.files?.[0]?.type === "external"
          ? page.properties["Files & media"].files[0].external.url
          : page.properties["Files & media"]?.files?.[0]?.file?.url || "";

      const productName =
        page.properties["Title"]?.rich_text?.[0]?.plain_text ||
        page.properties["Name"]?.title?.[0]?.plain_text ||
        "";

      const productDes =
        page.properties["Service"]?.rich_text?.[0].plain_text || "";

      const price = page.properties["Price"]?.number || 0;

      const category = page.properties["Category"]?.select?.name || "";

      return {
        imageUrl,
        productName,
        productDes,
        price, 
        category,
      };
    })
    .filter(
      (product) =>
        product.category.toLowerCase() === categoryFilter.toLowerCase()
    );
}
