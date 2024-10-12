import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  const data = await request.formData();
  const file = data.get('file');

  if (!file) {
    return NextResponse.json({ error: "No file received." }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = Date.now() + '_' + file.name.replace(/\s/g, '_');
  
  let filePath;
  
  if (process.env.VERCEL_ENV) {
    // We're on Vercel, use a temporary storage
    filePath = `/tmp/${filename}`;
  } else {
    // We're in local development, use the public folder
    filePath = path.join(process.cwd(), 'public', 'uploads', filename);
  }

  try {
    await writeFile(filePath, buffer);
    
    const publicPath = `/uploads/${filename}`;
    
    return NextResponse.json({ filePath: publicPath }, { status: 200 });
  } catch (error) {
    console.error('Error saving file:', error);
    return NextResponse.json({ error: "Error saving file." }, { status: 500 });
  }
}