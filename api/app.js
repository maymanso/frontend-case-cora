require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const apiRoutes = require('./routes/api.routes')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => console.log(`App listen on PORT ${process.env.PORT}`));