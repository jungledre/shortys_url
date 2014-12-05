"use strict";

module.exports = function(sequelize, DataTypes) {
  var URL = sequelize.define("URL", {
    prefix: DataTypes.STRING,
    suffix: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return URL;
};
