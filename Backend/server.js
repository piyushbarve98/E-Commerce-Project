
const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/Database")

//config 
dotenv.config({path: "Backend/config/config.env"})
//connecting to database
connectDB()

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port: ${process.env.PORT}` );
})
