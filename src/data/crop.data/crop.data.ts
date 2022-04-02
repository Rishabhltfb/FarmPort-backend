import { Mongoose } from "mongoose";
import Errors from "../../enums/errors";
import Crop from "../../models/types/crop.type/crop.type";
import CropModel from "../../models/schema/crop.schema/crop.schema";
import GenericError from "../../models/dto/generic/generic-error";

const mongoose = new Mongoose();

export default class CropDAO {

    // Get All Crops when visibility status is TRUE
    async getAllCrops(page:number, perPage:number): Promise<Array<Crop>> {
        try {
            const crops = await CropModel.find({visibilityStatus:true}).limit(perPage).skip((page-1)*perPage);
            if (!crops) {
                throw new GenericError(Errors.CROP_NOT_FOUND_ERR, 404);
            }
            return crops;
        } catch (err) {
            if (err instanceof mongoose.Error.CastError) {
                throw new GenericError(Errors.CROP_NOT_FOUND_ERR, 404);
            } else {
                throw err;
            }
        }
    }

    // Get All crops of a particular User
    async getAllCropsOfUser(page:number, perPage:number, id:String): Promise<Array<Crop>>{
        try {
            const crops = await CropModel.find({userId: id}).limit(perPage).skip((page-1)*perPage);
            if (!crops) {
                throw new GenericError(Errors.CROP_NOT_FOUND_ERR, 404);
            }
            return crops;
        } catch (err) {
            if (err instanceof mongoose.Error.CastError) {
                throw new GenericError(Errors.CROP_NOT_FOUND_ERR, 404);
            } else {
                throw err;
            }
        }
    }


     // Get Crop Details By Id
     async getCropById(id: String): Promise<Crop>{
        try {
            const crop = await CropModel.findById(id);
            if (!crop) {
                throw new GenericError(Errors.CROP_NOT_FOUND_ERR, 404);
            }
            return crop;
        } catch (err) {
            if (err instanceof mongoose.Error.CastError) {
                throw new GenericError(Errors.CROP_NOT_FOUND_ERR, 404);
            } else {
                throw err;
            }
        }
    }

    // Create crop
    async createCrop(crop: Crop): Promise<Crop>{
        const newCrop = new CropModel(crop);
        return newCrop.save();
    }
    
    // Delete Crop using ID
    async deleleCrop(id: String): Promise<void>{
        try {
            const deleteCrop = await CropModel.findByIdAndRemove(
                id
            )
        } catch (err) {
            throw new GenericError(Errors.CROP_NOT_FOUND_ERR, 404);
        }
    }

    // Update Crop using ID
    async updateCrop(id: String, crop: Crop): Promise<void>{
        try {
            const updateCrop = await CropModel.findByIdAndUpdate(
                id,
                { ...crop },
                { new: true, omitUndefined: true }
            );
        } catch (err) {
            throw new GenericError(Errors.USER_UPDATE_ERR, 500);
        }
    }

}