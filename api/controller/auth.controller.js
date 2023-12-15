import User from "../model/user.model.js";
import errorHandler from "../utills/error.js"
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
export const signup = async (req,res, next)=> {
    console.log(req.body);
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({username,email,password: hashedPassword});
    try{
        // error handling in sending data
        await newUser.save();
        res.status(201).json('User created successfully!');
    }catch(error)
    {
     next(error);  
    }
   
}
<<<<<<< HEAD
export const signin = async (req, res, next) =>{
    const {email, password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const {password: pass, ...rest} = validUser._doc;
        res
            .cookie('access_token', token, {httpOnly: true})
            .status(200)
            .json(rest);
    }catch(error){
        next(error)
    }
}
=======
>>>>>>> f0eead8044086c9ad72c8e9cb0e50c25ba36affb
