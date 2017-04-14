var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

    getDefaultProps() {
        return {title: 'Error'}
    },

    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    // runs after component is rendered. render() cannot alone
    componentDidMount() {
        var {title, message} = this.props;
        var modalMarkup =  (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Ok
                    </button>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($("#error-modal")); // new instance of modal
        modal.open();
    },

    render() {
        // renders nothing
        return (
            <div></div>
        )
    }
});

module.exports = ErrorModal;
