import multer from 'multer';
import connectDb from '@/middleware/mongoose';
import Image from '@/models/Image.js';
// Set up multer storage
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname  + '-' + uniqueSuffix);
  },
});

// Set up multer upload
const upload = multer({ storage }).single('image');

const handler=async(req,res)=>{
  console.log(req);
  try {
    await upload(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error uploading file' });
      }

      // Create a new image document
      const image = new Image({
        filename: req.file.filename,
        path: req.file.path,
      });

      // Save the image to MongoDB
      await image.save();

      // Return the saved image document
      res.status(200).json({ image });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

export default connectDb(handler);

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};