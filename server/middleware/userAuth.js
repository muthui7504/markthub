import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) =>{
    const token = req.cookies.token;

    if (!token){
        return res.json({success: false, message: 'Not authorised Login, try Again'})
    }
    try{
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        if (tokenDecode.id){
            req.body.userId = tokenDecode.id
        }else{
            return res.json({success: false, message: 'Login not aouthorised. Try again'})
        }

        next()

    }
    catch(error){
        return res.json({success: false, message: error.message})
    }
}

export default userAuth;