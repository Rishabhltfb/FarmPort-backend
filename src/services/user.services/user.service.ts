import { StringifyOptions } from "querystring";
import UserDAO from "../../data/user.data/user.data";
import Errors from "../../enums/errors";
import GenericError from "../../models/dto/generic/generic-error";
import User from "../../models/types/user.type/user.type";

export default class UserProfileService{
    private userDAO;
    constructor() {
        this.userDAO = new UserDAO();
    }

    getUserById(id: String): Promise<User>{
        return this.userDAO.getUserById(id);
    }
    
    createUser(User:User): Promise<User>{
        return this.userDAO.createUser(User);
    }

    getUserByEmail(email: string): Promise<User> {
        return this.userDAO.getUserByEmail(email);
    }

    async deleteUser(id: String): Promise<void>{
         await this.userDAO.deleteUser(id);
    }

    async updateUser(id: String, User: User): Promise<void>{
        await this.userDAO.updateUser(id, User);
    }
}