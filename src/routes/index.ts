import { Request, Response, Router } from "express";
import ResponseAdapter from "../utils/response-adapter";
import ResponseMessages from "../enums/response-message";

const router = Router();
const responseAdapter = new ResponseAdapter();

// @desc TESTING ENDPOINT
// @route /api/v1/test
// @access Public

router.get("/test", (req: Request, res: Response) =>
    res.send(responseAdapter.sendSuccessResponse(
        ResponseMessages.SERVER_RUNNING,
        null
    ))
);

// router.use("/auth", require("./auth.routes"));
// router.use("/restaurant", require("./restaurant.routes"));
// router.use("/filter", require("./filter.routes"));
// router.use("/user", require("./user.routes"));
// router.use("/collection", require("./collection.routes"));

module.exports = router;
