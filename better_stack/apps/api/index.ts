import express from "express";
import cors from "cors"
const app =express();
const port=8000;

app.use(express.json());
app.use(cors());


// routes


app.post("/website",(req,res)=>{

})
app.get("/status/:websiteId",(req,res)=>{
    
})
app.listen(port,()=>{
    console.log(`you are on server ${port}`)
})