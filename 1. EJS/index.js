import express from "express";

const app =express();
const port=3000;


app.get("/",(req,res)=>{ 
    const d = new Date();
    const day = d.getDay();

    console.log(day);

    let type="Weekday";
    let adv="Time to work hard";

    if(day=== 0||day=== 6){
        type="Weekend";
        adv="Time to have fun";
    
    }
    res.render("index.ejs",{
        day:type,
        advice:adv
    });

});


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

