/*function getTempCallback(location, callback) {
  callback(undefined, 70);
  callback('Location not found');
}

getTempCallback('London', function(err, temp){
  if(err){
    console.log("error", err);
  }else{
    console.log("Success",temp);
  }
});


function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    },1000);
  });
}

// promise can only be completed once. Either resolve or reject called
// then takes 2 arguments, first is Success and the second is error
// then waits for the promise to return
// delay faked by using set timeout in promise
getTempPromise('London').then(function (temp) {
  console.log("promise Success", temp);
}, function (error) {
  console.log("Promise error", error);
});

*/

function addPromise(a,b){
  return new Promise(function(resolve, reject) {
    ((typeof a === 'number') && (typeof b === 'number')) ?  resolve(a+b) : reject('One of these is not a number');
  });
}

addPromise(1,2).then(function (c) {
  console.log("number is ", c);
}, function (err) {
  console.log("err",err);
});

addPromise(1,'a').then(function (c) {
  console.log("number is ", c);
}, function (err) {
  console.log("err",err);
});
