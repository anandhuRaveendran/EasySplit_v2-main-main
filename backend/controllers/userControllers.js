// server/controllers/userControllers.js
const User = require('../models/userProfile');

// Update user details including photo
const updateUser = async (req, res) => {
  try {
    const { fullName, phoneNumber, emailAddress, username, bio } = req.body;
    let photo = req.file ? req.file.path : undefined; // Save file path if uploaded
    
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { fullName, phoneNumber, emailAddress, username, bio, photo },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  updateUser,
};
