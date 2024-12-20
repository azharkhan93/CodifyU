import { getCustomBlogPosts } from '@/utils/notion';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const posts = await getCustomBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}