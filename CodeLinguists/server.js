const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//Connect DB
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Importing dbs
require('./models/User');
require('./models/Shgroups');
require('./models/Shgjoin');

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/skill', require('./routes/skill'));
app.use('/api/loan', require('./routes/loan'));
app.use('/api/group', require('./routes/shgroups'));
app.use('/api/news', require('./routes/newsletter'));
app.use('/api/requests', require('./routes/shgjoin'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
