const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');
const port = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  var passwordto=req.body.password.to;
  console.log("User name = "+user_name+", password is "+password);
  res.end(req.body.user + req.body.password);
});

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});