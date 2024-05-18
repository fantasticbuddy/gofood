
// global.foodData = require('./db')(function call(err, data, CatData) {
//     // console.log(data)
//     if(err) console.log(err);
//     global.foodData = data;
//     global.foodCategory = CatData;
//   })
const mongoURI = 'mongodb+srv://GoodFood:Good_Food@cluster0.l0qcpie.mongodb.net/GoodFoodWebsite?retryWrites=true&w=majority'
  const express = require('express');
  const { default: mongoose } = require('mongoose');
  const app = express()
  const port = 5000
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(express.json())
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.use('/api/auth', require('./Routes/Auth'));
  
  app.listen(port, () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(()=>{
      console.log(`Example app listening on http://localhost:${port}`)
    })
    .catch(err=>{
      console.log(err)
    })
  })
  