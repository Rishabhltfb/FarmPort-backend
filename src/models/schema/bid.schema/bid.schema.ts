import mongoose from 'mongoose';
import Bid from "../../types/bid.type/bid.type";

mongoose.Schema.Types.String.set("trim", true);

const bidSchema = new mongoose.Schema<Bid>({
    bidderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    cropId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Crop"
    },
    price:{
        type:Number
    }
})

bidSchema.set("timestamps", true);
bidSchema.set("toObject", { virtuals: true });

const BidModel = mongoose.models.Bid || mongoose.model("Bid", bidSchema);
export default BidModel;
