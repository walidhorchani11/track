const mongoose = require('mongoose');

exports.connect = async () => {
  try {
    const db = process.env.DATABASE_URI.replace(
      '<password>',
      process.env.DATABASE_PASSWORD
    );

    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('successful connection...');
  } catch (error) {
    console.log('connection fails:', error);
  }
};
