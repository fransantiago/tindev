const dislikeController = require('./controllers/Dislikes');
const likeController = require('./controllers/Like');
const devController = require('./controllers/Dev');
const routes = require('express').Router();

routes.get('/devs', devController.index);
routes.post('/devs', devController.store);
routes.post('/devs/:devId/likes',  likeController.store);
routes.post('/devs/:devId/dislikes',  dislikeController.store);

module.exports = routes;