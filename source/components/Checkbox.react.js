var React = require('react');
var Label = require('./Label.react');

var strikeStyle = {
  fontStyle: 'italic'
};

var Checkbox = React.createClass({
  handleChange: function(event) {
    this.props.handleChange(this.props.id, event);
  },
  render: function() {
    var element;
    if (this.props.isComplete) {
      element = (<strike style={strikeStyle}><Label text={this.props.labelText} type="checkbox"><input type="checkbox" onChange={this.handleChange} checked /></Label></strike>);
    } else {
      element = (<Label text={this.props.labelText} type="checkbox"><input type="checkbox" onChange={this.handleChange} /></Label>);
    }

    return (
      <div className="checkbox">
        {element}
      </div>
    );
  }
});

module.exports = Checkbox;
