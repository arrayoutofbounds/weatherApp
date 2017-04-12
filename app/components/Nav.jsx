var React = require('react');
var {Link, IndexLink} = require('react-router'); // allows creation of links

var Nav = React.createClass({
    render(){
      return (
        <div>
          <h2>Nav component</h2>
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        </div>
      );
    }
});

module.exports = Nav;
