var React = require('react');
var Label = require('./Label.react');

var Checkbox = React.createClass({
  handleChange: function(event) {
    this.props.handleChange(this.props.id, event);
  },
  render: function() {
    var element;
    if (this.props.isComplete) {
      element = (<span className="strike-out"><Label text={this.props.labelText} type="checkbox"><input type="checkbox" onChange={this.handleChange} checked /></Label></span>);
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
