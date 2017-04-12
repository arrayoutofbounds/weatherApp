var express = require('express');

// create our app
var app = express();
const PORT = Number(process.env.PORT || 3000);

// send https to http because openweather does not allow on https
app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next(); //proceed normally
  }else{
    res.redirect("http://" + req.hostname + req.url);
  }
}

//serve the files to the server
app.use(express.static('public'));

// start the server
app.listen(PORT,function(){
console.log("express server is running on " + PORT);
});
