const mongoose = require("mongoose");

module.exports = async () => {
  try {
    MONGODB_URL =
      "mongodb+srv://shreeprakash:vt1zopbdUoXJ4PEY@cluster0.6piflwl.mongodb.net/";
    const connect = await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongoodb database is Connected ${connect.connection.host}`);
  } catch (error) {
    console.log("Database is not connected ");
    console.log("Error message : ", error.message);

    process.exit(1);
  }
};
