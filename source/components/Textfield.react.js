var React = require('react');

var textFieldStyle = {
  marginRight: '5px'
}

var Textfield = React.createClass({
  propTypes: {
    handleInputValueChange: React.PropTypes.func,
    inputValue: React.PropTypes.string
  },
  handleOnChange: function(event) {
    var handleInputValueChange = this.props.handleInputValueChange;

    if (handleInputValueChange) {
      handleInputValueChange(event)
    }
  },
  render: function() {
    return (
      <input type='textfield' style={textFieldStyle} className="form-control" name={this.props.name} value={this.props.inputValue} onChange={this.handleOnChange}/>
    );
  }
});

module.exports = Textfield;
