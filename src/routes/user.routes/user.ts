import express, { Request, Response, Router } from "express";
import expressAsyncHandler from "express-async-handler";
import ResponseMessages from "../../enums/response-message";
import UserProfileService from "../../services/user.services/user.service";
import ResponseAdapter from "../../utils/response-adapter";

const router = Router();
const responseAdapter = new ResponseAdapter();
const userProfileService = new UserProfileService();

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

// @DESC Create User
// @ROUTE api/v1/user/createUser
// @ACCESS 

router.post("/createUser",
    expressAsyncHandler(async (req:Request, res:Response) => {
        const userBody = req.body;
        await userProfileService.createUser(userBody);
        res.send(responseAdapter.sendSuccessResponse("User Created Successfully", userBody));
        
}))

// @DESC Get Current User By ID
// @ROUTE GET api/v1/user/:id
// @ACCESS 

router.get(
    "",
    expressAsyncHandler(async (req: Request, res: Response) => {
        let id = req.query.id || "";
        const response = await userProfileService.getUserById(id?.toString());
        res.send(
            responseAdapter.sendSuccessResponse("Current User fetched Successfully", response)
        )
    })
)

// @DESC Get Current User By Email
// @ROUTE GET api/v1/user/:email
// @ACCESS

router.get(
    "/getUserByEmail",
    expressAsyncHandler(async (req: Request, res: Response) => {
        let email = req.query.email || "";
        const response = await userProfileService.getUserByEmail(email?.toString());
        res.send(
            responseAdapter.sendSuccessResponse("Current User fetched Successfully", response)
        )
    })
)


// @DESC Update User By ID
// @ROUTE PUT api/v1/user/:id
// @ACCESS
router.put("", expressAsyncHandler(async (req: Request, res: Response) => {
    const userBody = req.body;
    let id = req.query.id?.toString()|| "";
    await userProfileService.updateUser(id, req.body);
    res.send(responseAdapter.sendSuccessResponse("User Updated Successfully", null));
})
)

// @DESC Delete User By ID
// @ROUTE DELETE api/v1/user/:id
// @ACCESS

router.delete("",
    expressAsyncHandler(async (req, res) => {
        let id = req.query.id || "";
        await userProfileService.deleteUser(id?.toString());
    res.send(responseAdapter.sendSuccessResponse("User Deleted Successfully",null))
}))


module.exports = router;