"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("URLs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      prefix: {
        type: DataTypes.STRING
      },
      suffix: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("URLs").done(done);
  }
};