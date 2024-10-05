import fs from 'fs';
import path from 'path';

export async function GET() {
  const folderPath = path.join(process.cwd(), 'public', 'img', 'slideshow');
  let items = [];

  if (fs.existsSync(folderPath)) {
    items = fs.readdirSync(folderPath).filter((item) =>
      /\.(png|jpg|jpeg|gif|webp|svg)$/.test(item)
    );
  }

  // Return the image filenames as JSON
  return new Response(JSON.stringify(items), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
