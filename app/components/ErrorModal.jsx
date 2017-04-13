var React = require('react');

var ErrorModal = React.createClass({

  getDefaultProps(){
    return {
      title: 'Error'
    }
  },

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  // runs after component is rendered. render() cannot alone
  componentDidMount(){
    var modal = new Foundation.Reveal($("#error-modal")); // new instance of modal
    modal.open();
  },

  render(){
    var {title,message} = this.props;

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Ok
          </button>
        </p>
      </div>
    )
  }
});

module.exports = ErrorModal;
