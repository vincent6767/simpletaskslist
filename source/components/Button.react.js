var React = require('react');

var Button = React.createClass({
  propTypes: {
    handleClick: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      type: 'submit',
      text: 'Submit'
    };
  },
  handleOnClick: function(event) {
    var handleClick = this.props.handleClick;

    if (handleClick) {
      handleClick(event);
    }
  },
  render: function() {
    return (
      <button type={this.props.type} className="btn btn-default" onClick={this.handleOnClick}>{this.props.text}</button>
    );
  }
});

module.exports = Button;
