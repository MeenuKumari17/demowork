import express, {Router} from "express";
// import res from "express/lib/response";
import User from "../model/User.js";

const route = express.Router();
// create user

route.post("", async (req, res) =>
{
    console.log(`getting input ${req.body}`)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });
    try {
        const savedUser = await user.save();
        res.status(200).json(savedUser);
        
    } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");       
    }
}
);

export default route;