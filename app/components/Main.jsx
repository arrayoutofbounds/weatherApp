var React = require('react');
var Nav = require('Nav');

// small-centered scales up and centers it for medium and large
var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
