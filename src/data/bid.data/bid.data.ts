import { Mongoose } from "mongoose";
import Errors from "../../enums/errors";
import GenericError from "../../models/dto/generic/generic-error";
import Bid from "../../models/types/bid.type/bid.type";
import BidModel from "../../models/schema/bid.schema/bid.schema";

const mongoose = new Mongoose();

export default class BidDAO {

    // Create Bid
    async createBid(bid:Bid): Promise<Bid>{
        const newBid = new BidModel(bid);
        return newBid.save();
    }

    // Get Bids for a Particular Crop
    async getBidForACrop(page: number, perPage: number, id: String): Promise<Array<Bid>>{
        try {
            const bids = await BidModel.find({cropId: id}).limit(perPage).skip((page-1)*perPage);
            if (!bids) {
                throw new GenericError(Errors.BID_NOT_FOUND_ERR, 404);
            }
            return bids;
        } catch (err) {
            if (err instanceof mongoose.Error.CastError) {
                throw new GenericError(Errors.BID_NOT_FOUND_ERR, 404);
            } else {
                throw err;
            }
        }
    }

    // Get Bids for current Users
    async currentUserBids(page: number, perPage: number, id: String): Promise<Array<Bid>>{
        try {
            const bids = await BidModel.find({bidderId: id}).limit(perPage).skip((page-1)*perPage);
            if (!bids) {
                throw new GenericError(Errors.BID_NOT_FOUND_ERR, 404);
            }
            return bids;
        } catch (err) {
            if (err instanceof mongoose.Error.CastError) {
                throw new GenericError(Errors.BID_NOT_FOUND_ERR, 404);
            } else {
                throw err;
            }
        }
    }


    // Delete Bid by Id
    async deleteBid(id: String): Promise<void>{
        try {
            const deleteCrop = await BidModel.findByIdAndRemove(
            id
            )
        } catch (err) {
            throw new GenericError(Errors.BID_NOT_FOUND_ERR, 404);
        }
    }

    // Count bid for a crop
    async countBidForCrop(id: String): Promise<Number>{
        try {
            const bids = await BidModel.find({ cropId: id }).count();
            if (!bids) {
                throw new GenericError(Errors.BID_NOT_FOUND_ERR, 404);
            }
            return bids;
        } catch (err) {
            throw new GenericError(Errors.BID_NOT_FOUND_ERR, 404);
        }
    }



    // Count bid for a crop
}