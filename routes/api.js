import express from "express";
import { isUnixTime } from "../utils/timeType.js";
const router = express.Router();

router.get("/:time", (req, res) => {
    if (isUnixTime(req.params.time)) {
        var date = parseInt(req.params.time);
        res.json({
            unix: date,
            utc: new Date(date).toUTCString()
        });
    }
    else {
        res.json({
            unix: new Date(req.params.time).getTime(),
            utc: new Date(req.params.time).toUTCString()
        });
    }
})

export {router as timeApiRouter};