
import { Client } from "@notionhq/client";

export const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const customNotionClient = new Client({ auth: process.env.CUSTOM_NOTION_API_KEY });
