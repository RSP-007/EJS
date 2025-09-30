import express from "express";

const app=express();
const port=3000;

app.get("/",(req,res)=>{
    const today = new Date();       //to find current date
    const day= today.getDay();     
    console.log(day);

    let dType="a weekday";
    let adv="better stay focused";

    if(day===0 || day===6){
        dType="a weekend";
        adv="weekend is not the time rest its an oppurtunity";
    }
    
    res.render("index.ejs",{
        dayType:dType,          //used to sent data to index.ejs using res.render
        advice:adv,
    });
});

app.listen(port,()=>{
    console.log(`Server is running in port ${port}`);
})