require('dotenv/config')
let express = require('express');
let app = express()
let path =require('path')
const PORT = process.env.PORT || 8008;

let prodRoute = require('./routes/productos');
let cartRoute = require('./routes/carrito');
let userRoute = require('./routes/user')
let authJwt = require("./utils/authjwt")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, 'views', 'ejs'))
app.set('view engine', 'ejs');

app.use(authJwt())


app.use("/productos",prodRoute);
app.use("/carrito",cartRoute);
app.use("/user",userRoute);


app.listen(PORT,()=>{
    console.log(`Server on: http://localhost:${PORT}`)
})