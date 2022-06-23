import express from "express";
import cors from "cors";
import morgan from "morgan";
import { timeApiRouter } from "./routes/api.js";
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(morgan("tiny"));

//routes
app.use('/timestamp/api', timeApiRouter)

// start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}   // end of app.listen
);
