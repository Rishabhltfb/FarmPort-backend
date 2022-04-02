import BidDAO from "../../data/bid.data/bid.data";
import Bid from "../../models/types/bid.type/bid.type";

export default class BidProfileServices {
    private bidDAO;
    constructor() {
        this.bidDAO = new BidDAO();
    }

    // Create Bid
    async createBid(Bid:Bid): Promise<Bid>{
        return this.bidDAO.createBid(Bid);
    }

    // Belete Bid by Id
    async deleteBid(id: String): Promise<void>{
        await this.bidDAO.deleteBid(id);
    }

    // Get all crops
    getBidForACrop(page:number, perPage:number,id:String): Promise<Array<Bid>>{
        return this.bidDAO.getBidForACrop(page,perPage,id);
    }

    // Get all crops
    currentUserBids(page:number, perPage:number,id:String): Promise<Array<Bid>>{
        return this.bidDAO.currentUserBids(page,perPage,id);
    }

    // Count bid for a crop
    countBidForCrop(id: String): Promise<Number>{
        return this.bidDAO.countBidForCrop(id);
    }
}