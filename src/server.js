const app = require('./app');
const router = require('./router');
const dotenv = require('dotenv');

dotenv.config();

const NODE_APP_PORT = process.env.port || 3000
app.use(router);

app.listen(NODE_APP_PORT, ()=>{
    console.log(`Server running on port: ${NODE_APP_PORT}`);
})