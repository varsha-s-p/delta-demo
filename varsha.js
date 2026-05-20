const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("Request received");
    next();
});

app.get('/', (req,res)=>{
    res.send("Hello World wlcome");
});

app.listen(3000);
