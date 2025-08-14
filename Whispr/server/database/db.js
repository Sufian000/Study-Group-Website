import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-sadnyzs-shard-00-00.ci9vzas.mongodb.net:27017,ac-sadnyzs-shard-00-01.ci9vzas.mongodb.net:27017,ac-sadnyzs-shard-00-02.ci9vzas.mongodb.net:27017/?ssl=true&replicaSet=atlas-14fywp-shard-0&authSource=admin&retryWrites=true&w=majority&appName=whispr-app`;

;
    try{
        await mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true});
        console.log('✅ Database connected successfully')
    }catch(error){
        console.log('❌ Error while connectiong with database', error.message);
    }
}

export default Connection;