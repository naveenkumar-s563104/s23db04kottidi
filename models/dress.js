const mongoose = require("mongoose")
const dressSchema = mongoose.Schema({
    dress_brand: String,
    dress_size: String,
    dress_cost: Number
})
module.exports = mongoose.model("Dress", dressSchema)

