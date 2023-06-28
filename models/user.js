const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt'); // only if you need to encrypt something
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) { 
    // instance method, class definition which creates an object, it's a synchronus function, taking user password and the password from the db and comaring it.  Creating the original password, hash it and then compare to the has password.  You can do this in the routes as well, but it is better to do it here.  Question and answer to recover password are usually also hashed.  So you will reuse this function quite a bit.
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    // sequelize will call these functions, you do not call them anywhere, second argument of init, it is the hooks, newUserData is the user data that you are passing the above user data
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true, // otehrwise sequelize makes it plural, 
    underscored: true, // changes camel case to underscore
    modelName: 'user',
  }
);

module.exports = User;
