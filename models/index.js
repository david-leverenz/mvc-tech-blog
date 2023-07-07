// Relationships are defined in this file.  No "through" relationships were necessary for this project (thankfully!).
const User = require('./user');
const Blog_data = require('./log_data');
const Comments = require('./Comments')
console.log(Comments);
User.hasMany(Blog_data, {
  foreignKey: 'user_id'
});

Blog_data.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog_data.hasMany(Comments, {
    foreignKey: 'blog_data_id',
    onDelete: 'CASCADE'
  });
  
  Comments.belongsTo(Blog_data, {
    foreignKey: 'blog_data_id',
  });

  User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  Comments.belongsTo(User, {
    foreignKey: 'user_id',
  })

module.exports = { User, Blog_data, Comments };