const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const chalk = require('chalk');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log(chalk.white.bgBlue('MongoDB Connected'));
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
