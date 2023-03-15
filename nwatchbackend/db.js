const mongoose = require("mongoose");
const password = encodeURIComponent("9450593005");
const MONGOuri = `mongodb+srv://kartikeya_vikram:${password}@nwatch.easmhbr.mongodb.net/?retryWrites=true&w=majority`;
const connectToMongo = () => {
  mongoose
    .connect(MONGOuri)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
};
module.exports = connectToMongo;
