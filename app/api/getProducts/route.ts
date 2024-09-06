import { getProducts } from "@/utils/notion";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    
    const products = await getProducts();

    return NextResponse.json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}