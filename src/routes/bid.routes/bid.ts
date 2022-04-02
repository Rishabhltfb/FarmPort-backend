import express, { Request, Response, Router } from "express";
import expressAsyncHandler from "express-async-handler";
import ResponseMessages from "../../enums/response-message";
import BidProfileServices from "../../services/bid.services/bid.services";
import ResponseAdapter from "../../utils/response-adapter";

const router = Router();
const responseAdapter = new ResponseAdapter();
const bidProfileServices = new BidProfileServices();

// @DESC Bid test route
// @ROUTE api/v1/bid/test
// @ACCESS Public

router.get(
    "/test",
    expressAsyncHandler(async (req: Request, res: Response) => {
        res.send(
            responseAdapter.sendSuccessResponse(
                ResponseMessages.BID_TEST_API_RUNNING,
                null
            )
        )
    })
)

// @DESC Create Bid
// @ROUTE api/v1/bid/createBid
// @ACCESS Public

router.post("/createBid",
    expressAsyncHandler(async (req:Request, res:Response) => {
        const bidBody = req.body;
        await bidProfileServices.createBid(bidBody);
        res.send(responseAdapter.sendSuccessResponse("Bid Created Successfully", bidBody));  
    })
)

// @DESC Delete Bid by Id
// @ROUTE api/v1/bid/:bidId
// @ACCESS Public
router.delete("",
    expressAsyncHandler(async (req, res) => {
        let id = req.query.bidId || "";
        await bidProfileServices.deleteBid(id?.toString());
    res.send(responseAdapter.sendSuccessResponse("Bid Deleted Successfully",null))
    })
)

// @DESC Fetch Bid for a particular crop
// @ROUTE api/v1/bid/getBidForACrop/:cropId
// @ACCESS

router.get(
    "/getBidForACrop",
    expressAsyncHandler(async (req: Request, res: Response) => {
        let cropId = req.query.cropId || "";
        let page = req.body.page;
        let perPage = req.body.perPage;
        const response = await bidProfileServices.getBidForACrop(page,perPage,cropId?.toString());
        res.send(
            responseAdapter.sendSuccessResponse("All Bids for a Crop fetched Successfully", response)
        )
    })
)

// @DESC Fetch Bid for a particular user
// @ROUTE api/v1/bid/currentUserBids/:userId
// @ACCESS

router.get(
    "/currentUserBids",
    expressAsyncHandler(async (req: Request, res: Response) => {
        let userId = req.query.userId || "";
        let page = req.body.page;
        let perPage = req.body.perPage;
        const response = await bidProfileServices.currentUserBids(page,perPage,userId?.toString());
        res.send(
            responseAdapter.sendSuccessResponse("Current Bids for a User fetched Successfully", response)
        )
    })
)

// @DESC Count Bid for a particular crop
// @ROUTE api/v1/bid/countBidForCrop/:cropId
// @ACCESS

router.get(
    "/countBidForCrop",
    expressAsyncHandler(async (req: Request, res: Response) => {
        let cropId = req.query.cropId || "";
        const response = await bidProfileServices.countBidForCrop(cropId?.toString());
        res.send(
            responseAdapter.sendSuccessResponse("Count for a crop fetched Successfully", response)
        )
    })
)





module.exports = router;
