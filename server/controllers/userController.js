import userModel from "../models/userModels.js";

export const getUserData = async (req, res) =>{

    try{
        const {userId} = req.body

        const user = await userModel.findById(userId)

        if (!user){
            return res.status(404).json({success: false, message:'user not found!'})
        }

        return res.status(200).json({
            success:true,
            userData: {
                name: user.name,
                id: user._id,
                isAccountVerified: user.isAccountVerified

            }

        })

    }catch(error){
        return res.status(500).json({success: false, message:error.message})
    }
}