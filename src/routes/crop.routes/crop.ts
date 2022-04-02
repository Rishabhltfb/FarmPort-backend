import express, { Request, Response, Router } from "express";
import expressAsyncHandler from "express-async-handler";
import ResponseMessages from "../../enums/response-message";
import CropProfileService from "../../services/crop.services/crop.services";
import ResponseAdapter from "../../utils/response-adapter";


const router = Router();
const responseAdapter = new ResponseAdapter();
const cropProfileService = new CropProfileService();

// @DESC Crop test route
// @ROUTE api/v1/crop/test
// @ACCESS Public

router.get(
    "/test",
    expressAsyncHandler(async (req: Request, res: Response) => {
        res.send(
            responseAdapter.sendSuccessResponse(
                ResponseMessages.CROP_TEST_API_RUNNING,
                null
            )
        )
    })
)

// @DESC Create Crop
// @ROUTE api/v1/crop/createUser
// @ACCESS 
router.post("/createCrop",
    expressAsyncHandler(async (req:Request, res:Response) => {
        const cropBody = req.body;
        await cropProfileService.createCrop(cropBody);
        res.send(responseAdapter.sendSuccessResponse("Crop Created Successfully", cropBody));  
    })
)

// @DESC Update Crop By ID
// @ROUTE PUT api/v1/crop/:cropId
// @ACCESS
router.put("", expressAsyncHandler(async (req: Request, res: Response) => {
    const cropBody = req.body;
    let id = req.query.cropId?.toString()|| "";
    await cropProfileService.updateCrop(id, req.body);
    res.send(responseAdapter.sendSuccessResponse("Crop Updated Successfully", null));
    })
)

// @DESC Delete Crop By ID
// @ROUTE DELETE api/v1/crop/:cropId
// @ACCESS

router.delete("",
    expressAsyncHandler(async (req, res) => {
        let id = req.query.cropId || "";
        await cropProfileService.deleteCrop(id?.toString());
    res.send(responseAdapter.sendSuccessResponse("Crop Deleted Successfully",null))
    })
)


// @DESC GET All Crops
// @ROUTE GET api/v1/crop/allCrops
// @ACCESS

router.get("/allCrops",
    expressAsyncHandler(async (req, res) => {
        let page = req.body.page;
        let perPage = req.body.perPage;
        const crops = await cropProfileService.getAllCrops(page, perPage);
        res.send(responseAdapter.sendSuccessResponse("All Crop Deleted Successfully", crops))
    })
)


// @DESC Get Current Crop By ID
// @ROUTE GET api/v1/crop/:cropId
// @ACCESS 

router.get(
    "",
    expressAsyncHandler(async (req: Request, res: Response) => {
        let id = req.query.cropId || "";
        const response = await cropProfileService.getCropById(id?.toString());
        res.send(
            responseAdapter.sendSuccessResponse("Current User fetched Successfully", response)
        )
    })
)

// @DESC Get All Crops By UserID
// @ROUTE GET api/v1/user/allCropsOfUser/:userId
// @ACCESS 

router.get(
    "/allCropsOfUser",
    expressAsyncHandler(async (req: Request, res: Response) => {
        let userId = req.query.userId || "";
        let page = req.body.page;
        let perPage = req.body.perPage;
        const response = await cropProfileService.getAllCropsOfUser(page,perPage,userId?.toString());
        res.send(
            responseAdapter.sendSuccessResponse("Current User fetched Successfully", response)
        )
    })
)


module.exports = router;