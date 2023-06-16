import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {name: {type: String, require:true},
    email: {type: String, required:true, unique:true, index:true},
    comment: {type:String, require:true},
    password: {type: String, required: true},
    isAdmin: {type:Boolean, required:true, deafult:false}
   }
);

const userModel = mongoose.model('User', userSchema);
export default userModel;