var express = require('express');

// create our app
var app = express();

//serve the files to the server
app.use(express.static('public'));

// start the server
app.listen(3000,function(){
console.log("express server is running on 3000");
});
