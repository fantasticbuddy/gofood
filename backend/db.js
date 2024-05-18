const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://GoodFood:Good_Food@cluster0.l0qcpie.mongodb.net/GoodFoodWebsite?retryWrites=true&w=majority'
const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true })
        .then(result => {
            console.log("connected to mongo");
        })
        .catch(err =>{
            console.log(err);
        })
};
module.exports = mongoDB;
