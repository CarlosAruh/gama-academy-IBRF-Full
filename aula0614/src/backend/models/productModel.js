import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {name: {type: String, require:true},
     rating: {type: Number, default:0},
     comment: {type:String, require:true},
    }, {timestamps:true
    }
)

const productSchema = new mongoose.Schema({
    name:{type: String, required:true},
    image:{type: String, required:true},
    price:{type: Number, defaut:0, required:true},
    category:{type: String, required:true},
    description:{type: String, required:true},
    rating:{type: String, required:true},
    countInStock:{type: Number, default:0, required:true},
    brand:{type: String, required:true},
    validate:{type: Date, required:true}

    }
);

const productModel = mongoose.model('product', productSchema);
export default productModel;