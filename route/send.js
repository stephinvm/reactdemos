module.exports=(app)=>{
    app.post("/user", (req, res) => {
        var newUser=new Feeds({
            name:req.body.name,
            place:req.body.place
        })
        newUser.save().then(user=>{
            res.send(user)
        })
      });
}