// All seeds work properly.
const seedUsers = require('./userData');
const seedBlog = require('./blogData');
const seedComments = require('./commentData');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBlog();
  console.log('\n----- BLOGS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
