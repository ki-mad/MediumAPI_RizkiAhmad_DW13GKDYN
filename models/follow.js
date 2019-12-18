'use strict';
module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define('follow', {
    user_id: DataTypes.INTEGER,
    followers: DataTypes.INTEGER
  }, {});
  follow.associate = function(models) {
    // associations can be defined here
  };
  return follow;
};