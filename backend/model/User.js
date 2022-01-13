import mongoose from "mongoose";
// import { required } from "nodemon/lib/config";

const UserSchema = mongoose.Schema({
    name:{
        type: "string",
        required: true
    },
    email:{
        type: "string",
        required: true,
        unique: true
    },
    address: {
        type : "string",
        required: true,
        min: 10
    },
    phone: {
        type: "string",
        required: true,
        unique: true
    },
},{timestamps: true});

const user = mongoose.model('User', UserSchema);

export default user;