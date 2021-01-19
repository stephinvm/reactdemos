const Feeds= require("../model/feeds");
module.exports = (app)=> {
    app.get("view",(req,res)=>{
        Feeds.find({}).then(feeds=>{
            res.send(feeds)
        })
        
    })
    
};
  