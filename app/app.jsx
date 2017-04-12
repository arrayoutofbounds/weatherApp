var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// render the component
// weather component nested in main because we want to shown main when weather component is shown
// nest about component because we want to show main when we shoud about

// just home route will render main and index Route
// if its is /about then it will render main and then about component
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}></Route>
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
