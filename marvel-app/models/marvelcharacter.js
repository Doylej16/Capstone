'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarvelCharacter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        MarvelCharacter.belongsTo(models.user, {
          foreignKey: 'userEmail',
          targetKey: 'email',
        });
    }
  }
  MarvelCharacter.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    thumbnail_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MarvelCharacter',
  });
  return MarvelCharacter;
};