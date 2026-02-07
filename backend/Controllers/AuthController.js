const User = require("../model/UsersModel");
const { createSecretToken } = require("../Util/SecretToken");

const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        console.log(req.body);  
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists, Login"
            });
        }

        const newUser = new User({ email, username, password: await bcrypt.hash(password, 10) }); 
        console.log("Creating user:", newUser);  
        await newUser.save();
        res.status(201).json({ message: "User signed up successfully", success: true });
       
    }
    catch (error) {
        console.error(error);
    }
    // navigate("/dashboard");
};

module.exports.Login = async (req, res)=> {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.json({message: "All fields are required"});
        }
        console.log("Login attempt for email:", email); // Debugging line
        const user = await User.findOne({email});
        console.log(user);
        if(!user){
            return res.status(403).json({message: "Incorrect email or password 1",success:false});
        }

        const auth = await bcrypt.compare(password, user.password);
        if(!auth){
            return res.status(403).json({message: "Incorrect email or password 2",success:false});
        }
        const token = createSecretToken(user._id, user.email);
        console.log("Generated Token:", token); // Debugging line

        res.cookie("token", token,{
            httpOnly: true,  // hide cookie from JS (good practice)
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // or 'none' if using https and cross-site
            secure: process.env.NODE_ENV === "production",  // set to true if using HTTPS
            maxAge: 3 * 24 * 60 * 60 * 1000, 
        });
        res.status(200).json({message: "User logged in successfully", success: true});
        
    }catch(error){
        console.error(error);
    }
};

module.exports.Logout = async (req, res) => {
 await res.clearCookie("token", {
    httpOnly: true,
     sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",  // set to true if using HTTPS
    
  });

  return res.status(200).json({ success: true, message: "Logged out successfully" });
};

