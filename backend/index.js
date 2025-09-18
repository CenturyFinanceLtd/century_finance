const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();

// Basic CORS setup
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://centuryfinanceltd1974_db_user:btReK68irFQvFGVK@cfldatabase.gnznryq.mongodb.net/?retryWrites=true&w=majority&appName=CFLdatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Static & routes
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blogs');
const customerRoutes = require('./routes/customers');
// Mount blog routes before generic /api auth to avoid accidental shadowing
app.use('/api/blogs', blogRoutes);
app.use('/api', authRoutes);
app.use('/', authRoutes); // support endpoints without /api prefix
app.use('/api', customerRoutes);

// Ensure upload directory exists and serve static files
const uploadsDir = path.join(__dirname, 'blogimages');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/blogimages', express.static(uploadsDir));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
