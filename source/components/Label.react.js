var React = require('react');

var Label = React.createClass({
  getDefaultProps: function() {
    return {
      text: 'Label '
    };
  },
  render: function() {
    if (this.props.type.toLowerCase() == 'checkbox') {
      return (
        <label>{this.props.children} {this.props.text}</label>
      );
    }
    
    return (
      <label>{this.props.text} {this.props.children}</label>
    );
  }
});

module.exports = Label;
