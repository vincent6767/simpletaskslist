var React = require('react');

var Message = React.createClass({
  getDefaultProps: function() {
    return {
      content: 'A message here',
      className: 'bg-info'
    }
  },
  render: function() {
    return (
      <div className={this.props.className}>{this.props.content}</div>
    );
  }
});

module.exports = Message;
