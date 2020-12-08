const express = require('express');
const app = express();
const mongoose = require('mongoose');


// Connect to DB
mongoose.connect(
    'mongodb+srv://tanay:zeus@cluster0.vqg2i.mongodb.net/<dbname>?retryWrites=true&',
    { useUnifiedTopology: true },
    () => console.log('Database connected!')
);

// Import routes
const authRoute = require('./routes/auth');


// Routes Middleware
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server is up!'));
