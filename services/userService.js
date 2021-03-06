import res from "express/lib/response";
import models from "../models";
import { NotFound } from "../utils/errors";

export const saveUser = async (user) => {
    const model = new models.User(user);
    const savedUser = await model.save();
    return savedUser;
};

export const getAllUsers = async () => {
    const User = models.User;
    const users = await User.find();
    return users;
}
export const update = async (user) => {
    const id = user._id;
    const User = models.User;
    let model = await User.findById(id);
    if (model) {
        model.username = user.username;
        model.save();
        return model;
    }
    throw new NotFound("update not happended in id " + user._id);
}

export const deleteById = async (id) => {
    const User = models.User;
    console.log("service" + id);
    if (id.length == 24) {
        let model = await User.findById(id);
        if (model) {
            let result = await User.deleteOne({ _id: id });
            return result;
        }
        throw new NotFound('User not found by the id ' + id);
    }
    else {

        throw new NotFound('User not found by the id ' + id);

    }



}