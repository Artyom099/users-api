import {MongoClient} from 'mongodb'
import {AvatarDBType, UserDBType} from './types'
import * as mongoose from "mongoose";

const mongoUri = process.env.mongoURI || "mongodb://0.0.0.0:27017";
let dbName = process.env.mogoDBName || 'mongoose-example'


export const client = new MongoClient(mongoUri);
let db = client.db("mongoose-example")
export const usersCollection = db.collection<UserDBType>('users')


const avatarSchema = new mongoose.Schema<AvatarDBType>({
    src: {type: String, required: true},
    addedAt: {type: Date, required: true}
})
const userSchema = new mongoose.Schema<UserDBType>({
    userName: {type: String, required: true},
    bio: String,
    addedAt: Date,
    avatars: {type: [avatarSchema], required: true}
})
// model - более умный аналог коллекций, с которым мы можем взаимодействовать
export const UserModelClass = mongoose.model('users', userSchema)


export async function runDb() {
    try {
        // Connect the client to the server
        await client.connect();
        await mongoose.connect(mongoUri + '/' + dbName);
        console.log("Connected successfully to mongo server");

    } catch {
        console.log("Can't connect to db");
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect()
    }
}
