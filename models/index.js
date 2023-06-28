const user = require('./user');
const blog_data = require('./blog_data');
const comments = require('./comments');

user.hasMany(blog_data, {
  foreignKey: 'user_id'
});

blog_data.belongsTo(user, {
  foreignKey: 'user_id'
});

blog_data.hasMany(comments, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
  });
  
  comments.belongsTo(blog_data, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
  });

  user.hasMany(comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  comments.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  })

// many to many relationships require a through table

module.exports = { user, blog_data, comments };