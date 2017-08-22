import express from 'express'
import * as dbUser from '../utils/userDBUtils'
import * as dbMarker from '../utils/markerDbUtils'

var router = express.Router();

router.get('/', (req, res)=> {
  res.send("Hello world");
});

router.get('/user', (req, res)=> {
  dbUser.listUsers().then(data => res.send(data));
});

router.post('/user', (req, res)=> {
  dbUser.createUser(req.body).then(data => res.send(data));
});

router.post('/user/login', (req, res)=> {
  dbUser.findUser(req.body).then(data => res.send(data));
});

router.delete('/user/:id', (req, res)=> {
  dbUser.deleteUser(req.params.id).then(data => res.send(data));
});


router.get('/marker', (req, res)=> {
  dbMarker.listMarkers().then(data => res.send(data));
});

router.post('/marker', (req, res)=> {
  dbMarker.createMarker(req.body).then(data => res.send(data));
});

router.delete('/marker/:id', (req, res)=> {
  dbMarker.deleteMarker(req.params.id).then(data => res.send(data));
});

module.exports = router;

