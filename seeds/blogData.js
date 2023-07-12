// Some basic blog data to seed the database.  I didn't have to run this too many times.
const { Blog_data } = require('../models');

const blogData = [
    {
        "post_title": "Awesome",
        "post_contents": "I think this blog site is awesome!",
        "user_id": 1
    },
    {
        "post_title": "Terrible",
        "post_contents": "I think this blog site is terrible!",
        "user_id": 2
    },
    {
        "post_title": "So-so",
        "post_contents": "I think this blog site is so-so!",
        "user_id": 3
    }
];

const seedBlog = () => Blog_data.bulkCreate(blogData);

module.exports = seedBlog;