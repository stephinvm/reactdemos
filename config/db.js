const mongoose = require('mongoose');

const uri = 'mongodb+srv://devanto:password01@cluster0.elvpm.mongodb.net/vmelocal?retryWrites=true&w=majority';
const connect = () => mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.log("MongoDB Connected…")
    })
    .catch(err => console.log(err));

module.exports = connect;