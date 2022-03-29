import {Types} from "mongoose";

export default interface Crop {
    readonly _id: Types.ObjectId,
    readonly userId: Types.ObjectId,
    cropName: String,
    askingPrice: Number,
    image: String,
    visibilityStatus: Boolean,
    cropStatus:String,
    cropScore:Number,
    quantity: Number,
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}