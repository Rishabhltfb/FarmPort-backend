import mongoose from 'mongoose';
import User from "../../types/user.type/user.type";

mongoose.Schema.Types.String.set("trim", true);

const userSchema = new mongoose.Schema<User>({
    name:{
        type: String,
    },
    email:{
        type:String,
    },
    userType:{
        type:String,
    },
    passwordHash:{
        type:String
    }

})

userSchema.set("timestamps", true);
userSchema.set("toObject", { virtuals: true });

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;
