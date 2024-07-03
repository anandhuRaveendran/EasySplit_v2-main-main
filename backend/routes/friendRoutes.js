const express = require("express");
const router = express.Router();
const friends = require("../models/Friend");

router.post("/addfriend", async (req, res) => {
    try {
        const data = req.body;
        const result = await friends.create(data);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to add friend' });
    }
});

router.get("/getFriends", async (req, res) => {
    try {
        const details = await friends.find({});
        res.status(200).json(details);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to fetch friends' });
    }
});

router.get("/getFriend/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const details = await friends.findById(id);
        if (!details) {
            return res.status(404).json({ message: "Friend not found" });
        }
        res.status(200).json(details);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to fetch friend details' });
    }
});

router.put("/updateFriend/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const options = { new: true }; 
        const result = await friends.findByIdAndUpdate(id, updatedData, options);
        if (!result) {
            return res.status(404).json({ message: "Friend not found" });
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to update friend' });
    }
});

router.delete("/deleteFriend/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await friends.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Friend not found" });
        }
        res.status(200).json({ message: "Friend deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to delete friend' });
    }
});

module.exports = router;
