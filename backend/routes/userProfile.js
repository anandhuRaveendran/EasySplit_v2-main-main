// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userControllers');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Set your upload directory
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname); // Set filename
  }
});

const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// PUT update user details with file upload
router.put('/:id', upload.single('photo'), userController.updateUser);

module.exports = router;
