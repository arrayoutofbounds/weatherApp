var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState(){
    // gets default state
    return {
      isLoading: false,
    }
  },

  handleSearch(location){
    var that = this;
    // make the location, temp undefined in case there is an error in teh openweathermap get temp
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    // because state will be changed, the render function is called
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({location:location,temp:temp, isLoading:false});
    }, function (e) {
      that.setState({isLoading:false,errorMessage: e.message });
    });
  },

  componentDidMount(){
    var location = this.props.location.query.location; // get the "location" from the query
    if(location  && location.length > 0){ // ensure that the location is legitimate
      this.handleSearch(location); // do the search
      window.location.hash = '#/'; // once the search is done, reset the query parameter
    }
  },

  // called when comp props gets updated from the react router
  componentWillReceiveProps(newProps){
    var location = newProps.location.query.location; // get the "location" from the query
    if(location  && location.length > 0){ // ensure that the location is legitimate
      this.handleSearch(location); // do the search
      window.location.hash = '#/'; // once the search is done, reset the query parameter
    }
  },

  render(){
    var {isLoading,temp,location,errorMessage} = this.state;

    function renderMessage() {
      if(isLoading){
        return <h3 className="text-center">Fetching Weather...</h3>;
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
