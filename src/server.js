const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const router = require('./router');

app.use(cors());
app.use(express.json());
dotenv.config()
const NODE_APP_PORT = process.env.port || 3000
app.use(router);

app.listen(NODE_APP_PORT, ()=>{
    console.log(`Server running on port: ${NODE_APP_PORT}`);
})