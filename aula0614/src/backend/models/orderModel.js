import mongoose from "mongoose";

const shippingSchema = {
    address: {type: String, required:true},
    city:{type: String, required:true},
    postalCode:{type: String, required:true},
    country: {type: String, required:true}
};

const paymentSchema = {
    paymentMethod: {type: String, required:true}

};

const orderItemSchema = new mongoose.Schema({
    name:{type: String, required:true},
    qty:{type: String, required:true},
    price:{type: Number, defaut:0, required:true},
    category:{type: String, required:true},
    product:{type: mongoose.Schema.Types.ObjectId, ref: 'Product', required:true}
    }
    
);

const orderSchema = new mongoose.Schema({
    name:{type: String, required:true},
    image:{type: String, required:true},
    price:{type: Number, defaut:0, required:true},
    category:{type: String, required:true},
    description:{type: String, required:true},
    rating:{type: String, required:true},
    countInStock:{type: Number, default:0, required:true},
    brand:{type: String, required:true},
    validate:{type: Date, required:true}

},{
    timestamp:true
}

)