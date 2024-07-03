const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const Friend = require('../models/Friend');


router.post('/addgroup', async (req, res) => {
  try {
    const { name, description, members, currency } = req.body;
    const group = new Group({ name, description, members, currency });
    const result = await group.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error adding group' });
  }
});

router.get('/getgroups', async (req, res) => {
  try {
    const groups = await Group.find({}).populate('members');
    res.status(200).json(groups);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching groups' });
  }
});

router.get('/getgroup/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const group = await Group.findById(id).populate('members');
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    res.status(200).json(group);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching group' });
  }
});

router.put('/updategroup/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const options = { new: true };
    const group = await Group.findByIdAndUpdate(id, updatedData, options).populate('members');
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    res.status(200).json(group);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating group' });
  }
});

// Delete a group by ID
router.delete('/deletegroup/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Group.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Group not found' });
    }
    res.status(200).json({ message: 'Group deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting group' });
  }
});

module.exports = router;