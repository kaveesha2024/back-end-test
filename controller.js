import UserModel from "./module.js";

export const getUsers = (req, res) => {
  UserModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
};
export const addUser = (req, res) => {
  const { id, name } = req.body;
  const user = new UserModel({
    id: id,
    name: name,
  });
  user
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
};
export const updateUser = (req, res) => {
  const { id, name } = req.body;
  UserModel.updateOne({ id: id }, { $set: { name: name } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
};
export const deleteUser = (req, res) => {  
  const id = req.body.id;
  UserModel.deleteOne({ id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
};
