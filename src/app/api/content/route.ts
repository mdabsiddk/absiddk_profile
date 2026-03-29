import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getCloudflareContext } from '@opennextjs/cloudflare';

// Fallback local FS approach
const dataFilePath = path.join(process.cwd(), 'src', 'data', 'landingContent.json');

// Helper to check authentication for content API edits
async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.has('admin_session');
}

export async function GET() {
  try {
    let env: any;
    try {
      const context = await getCloudflareContext();
      env = context?.env;
    } catch (e) {
      // Ignored
    }

    if (env && env.CONTENT_STORE) {
      const kvData = await env.CONTENT_STORE.get('landingContent');
      if (kvData) {
        return NextResponse.json({ success: true, data: JSON.parse(kvData) });
      }
    }

    const fileContent = fs.readFileSync(dataFilePath, 'utf8');
    const data = JSON.parse(fileContent);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to read content data', details: String(error) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const newContent = await request.json();

    let env: any;
    try {
      const context = await getCloudflareContext();
      env = context?.env;
    } catch (e) {
      console.warn("Cloudflare context not available, falling back to FS");
    }

    if (env && env.CONTENT_STORE) {
      await env.CONTENT_STORE.put('landingContent', JSON.stringify(newContent));
    }

    // Always update local FS so dev remains consistent
    try {
      fs.writeFileSync(dataFilePath, JSON.stringify(newContent, null, 2), 'utf8');
    } catch (e) {
      // Don't fail the request if we couldn't write to fs but wrote to KV successfully
    }

    return NextResponse.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update content data', details: String(error) }, { status: 500 });
  }
}
