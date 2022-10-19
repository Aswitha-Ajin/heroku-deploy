const express=require("express");
 const dotenv = require("dotenv");
const employeeRouter=require("./router/employeeRouter");
const mongo=require("./connect");
dotenv.config();
mongo.connect();
const app =express();


app.use(express.json());
app.use("/",(req,res,next)=>{
    
    var auth={
        authorised:true,
        };
        if(auth.authorised){
        console.log("authorised");
        next();
        }else{
        console.log("not authorised");
        res.send({msg:"not authorised"})
        }
        
});
app.use("/employees", employeeRouter);

app.listen(process.env.PORT);




// const express = require("express");
// const dotenv = require("dotenv");
// const employeeRouter = require("./router/employeeRouter");
// const mongo = require("./connect");

// dotenv.config();
// mongo.connect();
// const app = express();
// // to parse req.body, to send the req.body from client to server
// app.use(express.json());

// app.use("/", (req, res, next) => {
//   // Authentication
//   var auth = {
//     authorised: true,
//   };
//   if (auth.authorised) {
//     console.log("Authorised");
//     next();
//   } else {
//     console.log("Not Authorised");
//     res.send({ msg: "Not Authorised" });
//   }
// });

// app.use("/employees", employeeRouter);

// app.listen(process.env.PORT);