let expressJwt = require('express-jwt')

let authJwt = ()=>{
    let secret = process.env.SECRET
    return expressJwt({
        secret,
        algorithms:['HS256'],
        isRevoked:isRevoked
    }).unless({
        path:[
            '/users/login',
            '/users'
        ]
    })
}
let isRevoked = (req,payload,done)=>{
        if(!payload.isAdmin){
            done(null,true)
        }
        done()
}

module.exports = authJwt;