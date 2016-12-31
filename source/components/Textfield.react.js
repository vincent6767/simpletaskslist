var React = require('react');

var textFieldStyle = {
  marginRight: '5px'
}

var Textfield = React.createClass({
  propTypes: {
    handleInputValueChange: React.PropTypes.func,
    handleOnKeydown: React.PropTypes.func,
    inputValue: React.PropTypes.string
  },
  handleOnChange: function(event) {
    var handleInputValueChange = this.props.handleInputValueChange;

    if (handleInputValueChange) {
      handleInputValueChange(event)
    }
  },
  handleOnKeydown: function(event) {
    if (this.props.handleOnKeydown) {
      this.props.handleOnKeydown(event);
    }
  },
  render: function() {
    return (
      <input type='textfield' style={textFieldStyle} className="form-control" name={this.props.name} value={this.props.inputValue} onChange={this.handleOnChange} onKeyDown={this.handleOnKeydown} />
    );
  }
});

module.exports = Textfield;
