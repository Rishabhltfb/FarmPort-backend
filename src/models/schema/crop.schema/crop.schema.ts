import mongoose from 'mongoose';
import Crop from "../../types/crop.type/crop.type";

mongoose.Schema.Types.String.set("trim", true);

const cropSchema = new mongoose.Schema<Crop>({
   userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    cropName:{
        type:String,
    },
    askingPrice:{
        type: Number
    },
    image:{
        type:String
    },
    visibilityStatus:{
        type:Boolean
    },
    cropScore:{
        type:String
    },
    quantity:{
        type:Number
    }
})

cropSchema.set("timestamps", true);
cropSchema.set("toObject", { virtuals: true });

const CropModel = mongoose.models.Crop || mongoose.model("Crop", cropSchema);
export default CropModel;
