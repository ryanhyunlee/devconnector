const express = require('express');
const chalk = require('chalk');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json({ extended: false }));

connectDB();

app.get('/', (req, res) => res.send('Hello from backend'));

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(chalk.white.bgRed(`Server running on port:${PORT}`))
);
