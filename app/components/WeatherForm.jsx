var React = require('react');

var WeatherForm = React.createClass({

  // event passed in as it is a click event
  onFormSubmit(event){
    event.preventDefault(); //stops page from reloading

    var location = this.refs.location.value;
    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button>Get Weather </button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
