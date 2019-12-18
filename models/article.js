'use strict';
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    is_published: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {});
  article.associate = function(models) {
    // associations can be defined here
      article.belongsTo(models.category, {
      as: 'categoryid',
      foreignKey: 'category_id',
    })
  };
  return article;
};