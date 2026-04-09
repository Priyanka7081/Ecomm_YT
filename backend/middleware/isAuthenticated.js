import { json } from "express"
// import { JsonWebTokenError } from "jsonwebtoken"
import jwt from "jsonwebtoken";
import { User } from "../Models/userModel.js"


export const isAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(400).json({
        success: false,
        message: "Authorization token is missing or invalid",
      });
    }

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(400).json({
          success: false,
          message: "The registration token has expired",
        });
      }
      return res.status(400).json({
        success: false,
        message: "Access token is missing or invalid",
      });
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // 🔥 FIX HERE
    req.user = user;
    req.id = user._id

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const isAdmin = (req, res, next)=>{
  if(req.user && req.user.role === 'admin'){
    next()
  }else{
    return res.status(400).json({
      message:"Access denied: admins only"
    })
  }
}