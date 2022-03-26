import mongoose, { Connection } from "mongoose";
import { ConnectionOptions } from "tls";

const NODE_ENV = process.env.NODE_ENV || "";

let db: Connection;

function connectDB() {
    // DATABASE CONNECTION
    mongoose.connect(process.env.MONGOBD_URI ?? "", {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    } as ConnectionOptions);

    // MONGODB CONNECTION CHECK
    db = mongoose.connection;
    db.on("error", (err: any) => {
        console.log(`Database connection Error: ${err}`);
    });
    db.once("open", () => {
        console.log("Database connected");
    });
}

export function getDbConnection() {
    return db;
}

export default connectDB;
