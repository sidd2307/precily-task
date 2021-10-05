import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './route/routes.js';

const app = express(); 

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes);

// https://www.mongodb.com/cloud/atlas
// const USERNAME = process.env.USERNAME;
// const PASSWORD = process.env.PASSWORD;
// const URL = 'mongodb+srv://user:Manrun89@cluster0.zgrax.mongodb.net/CRUDAPP?retryWrites=true&w=majority';
// const URL = 'mongodb://user:Manrun89@cluster-first-shard-00-00.zgrax.mongodb.net:27017,cluster-first-shard-00-01.zgrax.mongodb.net:27017,cluster-first-shard-00-02.zgrax.mongodb.net:27017/CRUDAPP?ssl=true&replicaSet=atlas-dair4b-shard-0&authSource=admin&retryWrites=true&w=majority'
// const URL = 'mongodb://user:codeforinterview@crudapp-shard-00-00.zgrax.mongodb.net:27017,crudapp-shard-00-01.zgrax.mongodb.net:27017,crudapp-shard-00-02.zgrax.mongodb.net:27017/CRUDAPP?ssl=true&replicaSet=atlas-as0xva-shard-0&authSource=admin&retryWrites=true&w=majority'
const URL = 'mongodb+srv://admin:admin@cluster0.fax9n.mongodb.net/precilytask_1?retryWrites=true&w=majority'


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { 

    app.listen(8000, () => console.log(`Server is running on PORT: 8000`))
}).catch((error) => {
    console.log('Error:', error.message)
})
