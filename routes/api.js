import express from 'express'
import * as dbUser from '../utils/userDBUtils'

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

router.delete('/user/:id', (req, res)=> {
  dbUser.deleteUser(req.params.id).then(data => res.send(data));
});


module.exports = router;

