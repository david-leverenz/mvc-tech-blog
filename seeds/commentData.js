const { Comments } = require('../models');

const commentsData = [
    {
        "comment":"I think it is awesome too!",
        "blog_data_id": 1,
        "user_id": 3
    },
    {
        "comment":"I think it is terrible too!",
        "blog_data_id": 2,
        "user_id": 1
    },
    {
        "comment":"I think it is so-so too!",
        "blog_data_id": 3,
        "user_id": 2
    },
    {
        "comment":"I think it is fine!",
        "blog_data_id": 3,
        "user_id": 1
    },
    {
        "comment":"I'm not so sure about it.",
        "blog_data_id": 3,
        "user_id": 2
    }
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;
