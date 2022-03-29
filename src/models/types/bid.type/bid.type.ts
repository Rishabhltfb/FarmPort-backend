import {Types} from "mongoose";

export default interface Bid {
    readonly _id: Types.ObjectId,
    bidderId: Types.ObjectId,
    cropId: Types.ObjectId,
    price: Number,
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}