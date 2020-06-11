const userSchema = require('../models/UserSchema')

module.exports = {
    async login(req,res){
        const {email, password} = req.body

        const user = await userSchema.findOne({email:email})

        if(user && user.password == password) return res.status(200).json({msg: "login com sucesso"})

        return res.status(400).json({msg:"senha ou email incorreto"})
    }

    //forget password, update password using email
}