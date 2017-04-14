var React = require('react');
var {Link, IndexLink} = require('react-router'); // allows creation of links

var Nav = React.createClass({

  onSearch(event){
    event.preventDefault(); // stop refresh
    var location = this.refs.search.value;
    // need to encode before inserting in url
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0){
      // clear the input
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },

  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input ref="search" type="search" placeholder="Search weather by city"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
