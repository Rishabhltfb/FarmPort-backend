import {Types} from 'mongoose';

export default interface User {
    readonly _id?: Types.ObjectId;
    name: string;
    email: string;
    userType: string;
    readonly passwordHash: string;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}
