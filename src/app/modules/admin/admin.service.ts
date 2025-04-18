import { UserModel } from "../user/user.model";

const blockUserFromDB = async (id: string) => {
    const user = await UserModel.findById(id);
    // console.log(user);

    if (!user) {
        throw new Error(
            "The user you are trying to block, does not exist"
        );
    }

    const result = await UserModel.findByIdAndUpdate(id, { isBlocked: true });
    return result;
};
const getAllUser = async () => {
    const result = await UserModel.find();

    return result;
};

const deleteUserFromDB = async (id: string) => {
    const blog = await UserModel.findById(id);
    if (!blog) {
        throw new Error(
            "The blog you are trying to delete, does not exist"
        );
    }

    // Allows a logged-in user to delete their own blog by its ID.
    const result = await UserModel.findByIdAndDelete(id);

    return result;
};

export const AdminServices = {
    blockUserFromDB,
    deleteUserFromDB,
    getAllUser
};