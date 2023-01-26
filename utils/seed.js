const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

connection.on(`error`, err=>err);
connection.once(`open`, async () => {
    console.log(`You're Now Connected!`);
    // drop existing
    await User.deleteMany({});
    // drop existing
    await Thought.deleteMany({});
    // add and await results
    await Thought.insertMany(thoughts);
    // add and await results
    await User.insertMany(users);
    console.info(`Seeding Done!`);
    process.exit(0);
});