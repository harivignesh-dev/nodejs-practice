const express=require("express");
const cors=require("cors");
const app=express();
const options = { origin:(origin,callback) => { callback(null,true) } }
 app.use(cors(options));
app.use(express.json());
const data=("hello",123,{"key":"value"})
app.get("/",(req,res)=>{
    res.send("Hello World")
})
let studentdata =[
    {
        Name:"HARI VIGNESH",
        Age : 20,
        Rollnumber : 233350
    }
];
app.post('/',(req,res)=>{
    studentdata.push(HTMLTableRowElement.body);
    console.log(req.body);
    res.send("Done")

})
app.get('/student',(req,res)=>{
    res.send(studentdata);
})
app.listen(3333,()=>{
    console.log("started")
})
