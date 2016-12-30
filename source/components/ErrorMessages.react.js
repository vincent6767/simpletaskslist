var React = require('react');
var Message = require('./Message.react');

var ErrorMessages = React.createClass({
  propTypes: {
    messages: React.PropTypes.array
  },
  getDefaultProps: function() {
    return {
      messages: []
    };
  },
  render: function() {
    var errorElements = [];
    this.props.messages.forEach(function(msg, i) {
        errorElements.push((<Message className="bg-danger" key={i} content={msg} />));
    });
    return (<div>{errorElements}</div>);
  }
});

module.exports = ErrorMessages;
