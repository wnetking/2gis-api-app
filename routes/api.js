import express from 'express'
import * as dbMarker from '../utils/markerDbUtils'

var router = express.Router();

router.get('/', (req, res)=> {
  res.send("Hello world");
});

router.get('/markers', (req, res)=> {
  dbMarker.listMarkers().then(data => res.send(data));
});

router.post('/marker-save', (req, res)=> {
  dbMarker.createMarker(req.body).then(data => res.send(data));
});

router.delete('/marker/:id', (req, res)=> {
  dbMarker.deleteMarker(req.params.id).then(data => res.send(data));
});

module.exports = router;

