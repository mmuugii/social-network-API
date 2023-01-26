const User = require('../models/User');

// attempted to create all functions using async/await. let's see if it works.
module.exports = {
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId}).select('-__v');
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.userId}, {$set: req.body}, {runValidators: true, new: true});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({_id: req.params.userId});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async addOneFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.userId}, {$addToSet: {friends: req.params.friendId}}, { new: true});
        } catch (error) {
            res.status.json(error);
        }
    },
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.userId}, {$pull: {friends: req.params.friendId}}, {new: true});
        } catch (error) {
            res.status.json(error);
        }
    }
}