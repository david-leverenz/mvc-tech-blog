const { User } = require('../models');

const userData = [
    {
        "name": "Awesome",
        "email": "sal@hotmail.com",
        "password": "password12345"
    },
    {
        "name": "Terrible",
        "email": "lernantino@gmail.com",
        "password": "password12345"
    },
    {
        "name": "So-so",
        "email": "amiko2k20@aol.com",
        "password": "password12345"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;