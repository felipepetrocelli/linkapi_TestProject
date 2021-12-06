const express = require("express");
const connection = require("./database");
const cors = require("cors");
const routes = require('./opportunity/opportunity.routes');

require("dotenv").config();

const port = process.env.PORT || 3333;

const app = express();

app.use('/opportunity', routes);
app.use(cors());
app.use(express.json());
app.use(routes);

connection();

app.listen(port, () => {
    console.log('Server is running')
});