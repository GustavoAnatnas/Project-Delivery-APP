module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('salesProducts', {
        sale_id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
            references: {
                model: 'sales',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        product_id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER, 
            references: {
                model: 'products',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        quantity: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('salesProducts');
    },
  };