const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () => console.log('Database connected!')
);

// Import routes
const authRoute = require('./routes/auth');


// Routes Middleware
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server is up!'));
