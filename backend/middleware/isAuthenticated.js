import { json } from "express"
import { JsonWebTokenError } from "jsonwebtoken"

export const isAuthenticated = async(req,res,next)=>{
    try {
        const authHeader = req.headers.authorization
        if(!authHeader || !authHeader.startsWith('Bearer')){
            return res.status(400).json({
                success:false,
                message:"Authorization token is missing or invalid"
            })
        }
        const token = authHeader.split(" ")[1]
        let decoded
        try {
            decoded = JsonWebTokenError.verify(token, process.env.JWT_SECRET)
        } catch (error) {
            if(error.name === "TokenExpiredError"){
                return res.status(400).json({
                    success:false,
                    message:"The registration token has expired"
                })
            }
            return res.status(400).json({
                success:false,
                message:"Access token is missing or invalid"
            })
            
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}