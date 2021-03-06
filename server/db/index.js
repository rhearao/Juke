const db = require('./db')
const Album = require('./album')
const Artist = require('./artist')
const Song = require('./song')
// require each of your models here...

Song.belongsTo(Album)
Album.hasMany(Song);

Album.belongsTo(Artist)
Artist.hasMany(Album);

Song.belongsTo(Artist)
Artist.hasMany(Song)

// ...and give them some nice associations here!

module.exports = {
  db,
  Album,
  Artist,
  Song
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}
