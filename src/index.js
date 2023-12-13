// server/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;
const {serverConnection}= require('./utils/util')
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const startServer= async () =>{
   try {
    await serverConnection;
    console.log('Connected to the PostgreSQL database');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    app.use('/api',routes)

   }
   catch(err){
    console.log(err, "Error while connecting server")
   }
}

startServer();



