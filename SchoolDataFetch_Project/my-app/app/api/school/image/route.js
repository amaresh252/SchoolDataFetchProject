import { writeFile } from 'fs/promises';

export const POST = async (req, res) => {
  try {
    const formData = await req.formData();
    
    if (!formData.has('file')) {
      throw new Error('File data is missing.');
    }

    const file = formData.get('file');
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/assets/${file.name}`;
    await writeFile(path, buffer);

    return new Response('Successful image upload', { status: 200 });
  } catch (err) {
    console.error('Error in image upload:', err);
    return new Response('Error in image upload', { status: 400 });
  }
};
