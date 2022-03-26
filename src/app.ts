import express from "express";
import "dotenv/config";
import connectDB from "./config/db";

const app = express();

if(process.env.NODE_ENV !== "test"){
    connectDB();
}

const { PORT } = process.env;

app.enable("trust proxy");
app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

try {
    app.listen(PORT || 8080, () => {
        console.log("Server INIT", `Listening on PORT: ${PORT}`);
        console.log(`Running in ${process.env.NODE_ENV} environment`);
    });
} catch (error: any) {
    console.log(`Server SHUTDOWN`, error.message, error);
}

app.use("/api/v1", require("./routes"));

export default app;
