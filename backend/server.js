const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userProfile');
const friendRoutes = require('./routes/friendRoutes')
const groupRoutes = require('./routes/groupRoutes');

const app = express();
const PORT = 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json({ limit: '10mb' })); 
app.use('/uploads', express.static('uploads')); 

app.use('/api/auth', authRoutes);
app.use('/api/userProfile', userRoutes);
app.use('/api/friend',friendRoutes);
app.use('/api/group',groupRoutes)

mongoose.connect('mongodb://localhost:27017/splitApp', {
});

const database = mongoose.connection;

database.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

database.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
