// seeding data obtained and updated from mini project.

const users = [
    { 
        username: "Smith",
        email: "smithy@mail.com",
    },
    {
        username: "Jones",
        email: "jonesy@mail.com",
    },
    {
        username: "Coollastname",
        email: "coolio@mail.com",
    },
    {
        username: "Zidane",
        email: "zizou@mail.com",
    },
    {
        username: "Zijie",
        email: "zijie@mail.com",
    },
    {
        username: "Zinedine",
        email: "zizzou@mail.com"
    },
    {
        username: "Zion",
        email: "zion@mail.com",
    },
    {
        username: 'Courtney',
        email: "court@mail.com",
    },
    {
        username: "Gillian",
        email: "gill@mail.com",
    },
    {
        username: "Clark",
        email: "clarky@mail.com"
    },
    {
        username: "Jared",
        email: "jred@mail.com",
    },
    {
        username: "Grace",
        email: 'gravy@mail.com',
    },
];

const getRandomUsers = () => {
    return users[Math.floor(Math.random() * users.length-1)].username;
};

const thoughts = [
    {
        thoughtText: 'I cant believe its not butter',
        username: getRandomUsers(),
    },
    {
        thoughtText: 'Pat Mahomes is a Good QB',
        username: getRandomUsers(),
    },
    {
        thoughtText: 'But Joey BRRRR is better',
        username: getRandomUsers(),
    },
    {
        thoughtText: 'I wonder who will win the AFC?',
        username: getRandomUsers(),
    },
    {
        thoughtText: 'Man United sucks',
        username: getRandomUsers(),
    },
    {
        thoughtText: 'Man City sucks',
        username: getRandomUsers(),
    },
    {
        thoughtText: 'Liverpool sucks',
        username: getRandomUsers(),
    },
    {
        thoughtText: 'I hope 49ers win the Super Bowl',
        username: getRandomUsers(),
    },
];

// Get a random item given an array

// Export the functions for use in seed.js
module.exports = { users, thoughts };
