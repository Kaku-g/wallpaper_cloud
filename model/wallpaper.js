const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  link: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

module.exports = mongoose.model("Wallpapers", ImageSchema);
