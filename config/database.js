const Sequelize = require('sequelize');

// Creating the connection
const sequelize = new Sequelize('nodeSequelize', 'marcelo', 'marcelo123', {
    host: 'localhost',
    dialect: 'mysql',
    // # Production settings
    // pool: { 
    //     max: 5,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000
    // }
});

// Testing the connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });