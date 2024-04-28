import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { filename } = req.query;

  // Construct the path to the image file
  const filePath = path.join(process.cwd(), 'public', 'uploads', filename);

  // Read the image file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Error reading the image file');
    }

    // Set the response headers
    res.setHeader('Content-Type', 'image/*');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', data.length);

    // Send the image data as the response
    res.end(data);
  });
}