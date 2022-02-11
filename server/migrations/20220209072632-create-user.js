'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {

 
    await queryInterface.createTable('Users', {
      // id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER
      // },
      id:{
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED
      },
      userName: {
        type: Sequelize.CHAR(64)
      },
      userDesc: {
        type: Sequelize.TEXT
      },
      hasCat: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // await queryInterface.renameColumn('Users', 'id','index')
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};