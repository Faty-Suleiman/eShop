const Product = require("./model/productModel");
const data = require("./data/productData");
const User = require("./model/userModel");
const connectDB = require("./config/db");

connectDB();

const seedData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(data.products);
    await User.remove({});
    await User.insertMany(data.users);
    console.log("Data seeded to MongoDB successfully");
  } catch (error) {
    console.log("Data seeding failed" + error);
  }
};

seedData();
