const userSchema = require('../models/UserSchema')

module.exports = {
    async create(req,res){

        const userData = req.body

        const userExists = await userSchema.findOne({cpf:userData.cpf})

        if(userExists){return res.status(400).json({message:"usuário já existe"})}

        const user = await userSchema.create(userData)

        return res.json(user)
    },
    async isVerified(req,res){

        const { id } = req.params

        const verified = await userSchema.findOneAndUpdate({_id:id}, {isVerified:true})

        return res.status(200).json(verified)   
    },
    async update(req,res){
        const {id} = req.params

        const update = await userSchema.findByIdAndUpdate(id, req.body)

        return res.json(update)
    }
}