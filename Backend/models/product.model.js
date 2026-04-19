import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields..
});

const Product = mongoose.model('Product', productSchema);  // in mongoose, the first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercase version of your model name. Thus, for the 'Product' model, Mongoose will look for a 'products' collection in the database.

export default Product;