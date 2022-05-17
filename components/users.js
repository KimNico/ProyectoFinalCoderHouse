let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")
let {User} = require('../models/users')


class Users{

    async getuser(res,req,next){
        const userList = await User.find()
    }

    async registerUser(req,res,next){
     try {
        const {name, email,password,isAdmin} = req.body

        let newUser = new User({
            name,
            email,
            password: bcrypt.hashSync(password, 10),
            isAdmin
        })
        newUser = await newUser.save()
        !newUser ? res.status(500).send({message:'Usuario no encontrado'})
    : res.status(200).send(newUser)
     } catch (error) {
         console.log(error)
     }
    }

    async loginUser(req,res,next){
      try {
        let user = await User.findOne({email:req.body.email})
        let secret = process.env.SECRET;
        if(!user){
            res.status(404).send({message:'No existe este usuario'})
        }else if(user  && bcrypt.compareSync(req.body.password, user.password)){
            let token = jwt.sign(
                {
                userId: user._id,
                isAdmin: user.isAdmin
            },
            secret,
            {
                expiresIn: '1d'
            }
            );
            res.status(200).send({email:user.email,token})
        }else{
            res.status(400).send({message:'Datos incorrectos'})
        }
    
      } catch (error) {
          console.log(error)
      }
    }
}

module.exports = new Users()