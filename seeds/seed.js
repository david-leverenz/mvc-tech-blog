const sequelize = require('../config/connection');
const { User, Blog_post, Comments } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blogs = await User.bulkCreate(blogData, {
    // individualHooks: true,
    // returning: true,
  });

  const comments = await User.bulkCreate(commentData, {
    // individualHooks: true,
    // returning: true,
  });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

  process.exit(0);
};

seedDatabase();