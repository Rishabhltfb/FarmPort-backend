import {Mongoose} from "mongoose";
import Errors from "../../enums/errors";
import User from "../../models/types/user.type/user.type";
import UserModel from "../../models/schema/user.schema/user.schema";
import GenericError from "../../models/dto/generic/generic-error";

const mongoose = new Mongoose();

export default class UserDAO{

    // Get User By Id
    async getUserById(id: String): Promise<User>{
        try {
            const user = await UserModel.findById(id);
            if (!user) {
                throw new GenericError(Errors.USER_NOT_FOUND_ERR, 404);
            }
            return user;
        } catch (err) {
            if (err instanceof mongoose.Error.CastError) {
                throw new GenericError(Errors.USER_NOT_FOUND_ERR, 404);
            } else {
                throw err;
            }
        }
    }

    // Get user by email
    async getUserByEmail(email: string): Promise<User> {
        return UserModel.findOne({ email }).exec();
    }

    // Create a new User
    async createUser(user: User): Promise<User>{
        const newUser = new UserModel(user);    
        return newUser.save();
        
    }

    // Delete a user by id
    async deleteUser(id: String): Promise<void>{
        try {
            const deleteUser = await UserModel.findByIdAndRemove(
                id
            )
        } catch (err) {
            throw new GenericError(Errors.USER_NOT_FOUND_ERR, 404);
        }
        
    }

    //Update a user
    async updateUser(id: String, user: User): Promise<void>{
        try {
            const updateUser = await UserModel.findByIdAndUpdate(
                id,
                { ...user },
                { new: true, omitUndefined: true }
            );
        } catch (err) {
            throw new GenericError(Errors.USER_UPDATE_ERR, 500);
        }
    }


}