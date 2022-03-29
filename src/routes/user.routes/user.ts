import express, { Request, Response, Router } from "express";
import expressAsyncHandler from "express-async-handler";
import ResponseMessages from "../../enums/response-message";
import ResponseAdapter from "../../utils/response-adapter";

const router = Router();

const responseAdapter = new ResponseAdapter();

// @DESC User test route
// @ROUTE api/v1/user/test
// @ACCESS Public

router.get(
    "/test",
    expressAsyncHandler(async (req: Request, res: Response) => {
        res.send(
            responseAdapter.sendSuccessResponse(
                ResponseMessages.USER_TEST_API_RUNNING,
                null
            )
        )
    })
)

module.exports = router;