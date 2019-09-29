const Sequelize = require('sequelize');
const db = require('./db');

module.exports = db.define('album', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  artworkUrl: {
    type: Sequelize.STRING,
    defaultValue: 'default-album.jpg'
  }
})

