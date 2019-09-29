const router = require('express').Router()
const { Album, Artist, Song } = require('../db/index')

router.get('/albums', (req, res, next) => {
  Album.findAll({include:[Artist]})
  .then(album => res.json(album))
  .catch(next)
})

router.get('/albums/:albumId', (req, res, next) => {
  let id = Number(req.params.albumId)
  Album.findById(id, {include: [Artist, {model: Song, include: [Artist]}]})
  .then(album => res.json(album))
  .catch(next)
})

module.exports = router
