import CropDAO from "../../data/crop.data/crop.data";
import Crop from "../../models/types/crop.type/crop.type";

export default class CropProfileService {
    private cropDAO;
    constructor() {
        this.cropDAO = new CropDAO();
    }

    // Get crop by Id
    getCropById(id: String): Promise<Crop>{
        return this.cropDAO.getCropById(id);
    }

    // Get all crops
    getAllCrops(page:number, perPage:number): Promise<Array<Crop>>{
        return this.cropDAO.getAllCrops(page,perPage);
    }

    //Get all crops of a user
    getAllCropsOfUser(page:number, perPage:number, id:String): Promise<Array<Crop>>{
        return this.cropDAO.getAllCropsOfUser(page,perPage,id);
    }

    // Create Crop
    createCrop(Crop:Crop): Promise<Crop>{
        return this.cropDAO.createCrop(Crop);
    }

    // Delete Crop
    async deleteCrop(id: String): Promise<void>{
         await this.cropDAO.deleleCrop(id);
    }

    // Update Crop
    async updateCrop(id: String, Crop: Crop): Promise<void>{
        await this.cropDAO.updateCrop(id, Crop);
    }
    
    
    
}