require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/FoodRouters')

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/food', foodRoutes);

mongoose.connect('mongodb://FoodAdmin:!rCmKkn9@localhost:27017/dbFood?authSource=admin',{
    useNewUrlParser: true
},
    (err, res) => {
      err && console.log(`ERROR: Connecting to DB ${err}`);
      app.listen(3000, () =>
        console.log("Connected to DB")
      );
    }
  );