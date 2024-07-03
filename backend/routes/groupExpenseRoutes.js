const express = require('express');
const router = express.Router();
const GroupExpense = require('../models/GroupExpense');
const Group = require('../models/Group');
const Friend = require('../models/Friend');

// Add a group expense
router.post('/addgroupexpense', async (req, res) => {
  try {
    const { category, description, amount, payer, group, notes, splitMethod, splitDetails } = req.body;
    
    // Validate payer is a member of the group
    const groupDoc = await Group.findById(group).populate('members');
    if (!groupDoc) {
      return res.status(404).json({ message: 'Group not found' });
    }
    
    const payerIsMember = groupDoc.members.some(member => member._id.toString() === payer);
    if (!payerIsMember) {
      return res.status(400).json({ message: 'Payer is not a member of the group' });
    }
    
    const expense = new GroupExpense({ category, description, amount, payer, group, notes, splitMethod, splitDetails });
    const result = await expense.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error adding group expense' });
  }
});

// Get all group expenses
router.get('/getgroupexpenses', async (req, res) => {
  try {
    const expenses = await GroupExpense.find({}).populate('payer group splitDetails.member');
    res.status(200).json(expenses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching group expenses' });
  }
});

// Get a single group expense by ID
router.get('/getgroupexpense/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await GroupExpense.findById(id).populate('payer group splitDetails.member');
    if (!expense) {
      return res.status(404).json({ message: 'Group expense not found' });
    }
    res.status(200).json(expense);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching group expense' });
  }
});

// Update a group expense by ID
router.put('/updategroupexpense/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    
    // Validate payer is a member of the group if payer is being updated
    if (updatedData.payer || updatedData.group) {
      const groupDoc = await Group.findById(updatedData.group || updatedData.groupId).populate('members');
      if (!groupDoc) {
        return res.status(404).json({ message: 'Group not found' });
      }
      
      const payerIsMember = groupDoc.members.some(member => member._id.toString() === (updatedData.payer || updatedData.payerId));
      if (!payerIsMember) {
        return res.status(400).json({ message: 'Payer is not a member of the group' });
      }
    }

    const options = { new: true };
    const expense = await GroupExpense.findByIdAndUpdate(id, updatedData, options).populate('payer group splitDetails.member');
    if (!expense) {
      return res.status(404).json({ message: 'Group expense not found' });
    }
    res.status(200).json(expense);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating group expense' });
  }
});

// Delete a group expense by ID
router.delete('/deletegroupexpense/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await GroupExpense.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Group expense not found' });
    }
    res.status(200).json({ message: 'Group expense deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting group expense' });
  }
});

module.exports = router;
