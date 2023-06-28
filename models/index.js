const User = require('./User');
const Blog_data = require('./Blog_data');
const Comments = require('./Comments');

User.hasMany(Blog_data, {
  foreignKey: 'user_id'
});

Blog_data.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog_data.hasMany(Comments, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
  });
  
  Comments.belongsTo(Blog_data, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
  });

  User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  })

// many to many relationships require a through table

module.exports = { User, Blog_data, Comments };