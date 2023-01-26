const { Thought, User } = require('../models');

// attempted to create all functions using async/await. let's see if it works.
module.exports = {
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate({ _id: req.body.userId }, { $addToSet: {thoughts: thought._id} }, {new:true});
            res.json(`Thought created!`);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId});
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$set: req.body}, {runValidators: true, new: true});
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({_id: req.params.thoughtId});
            if (!thought) {
                res.status(404).json({message: `No thought found with this ID`});
            } else {
                const user = await User.findOneAndUpdate({thoughts: req.params.thoughtId}, {$pull: {thoughts: req.params.thoughtId}}, {new:true});
                res.json({message: 'Deleted thought!'});
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async addThoughtReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$addToSet: {reactions: req.body}}, {runValidators: true, new: true});
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async removeThoughtReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$pull: {reactions: {reactionId: req.params.reactionId}}}, {runValidators: true, new: true});
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}