var React = require('react');
var Label = require('./Label.react');
var Button = require('./Button.react');
var Textfield = require('./Textfield.react');
var TaskActionCreators = require('../actions/TaskActionCreators');
var ErrorActionCreator = require('../actions/ErrorActionCreator');

var NewTaskForm = React.createClass({
  getInitialState: function() {
    return {
      inputValue: ''
    };
  },
  setInputValue: function(newValue) {
    this.setState({
      inputValue: newValue
    });
  },
  handleInputValueChange: function(event) {
    var inputValue = event.target.value;
    this.setInputValue(inputValue);
  },
  handleFormSubmit: function(event) {
    event.preventDefault();

    var taskName = this.state.inputValue;

    if (!taskName) {
      // this.props.handleOnError('Task name is not allowed to be empty');
      ErrorActionCreator.addErrorMessages(['Task name is not allowed to be empty']);
    } else {
      TaskActionCreators.addNewTask(taskName);
    }
  },
  render: function() {
    return (
      <form className="form-inline" id="new-task-form">
        <div className="form-group">
          <Label text="New Task Name: " type="textfield"><Textfield handleInputValueChange={this.handleInputValueChange} name="newTaskName" initialValue={this.state.inputValue} /></Label>
        </div>
        <Button text="Add" type="button" handleClick={this.handleFormSubmit}/>
      </form>
    );
  }
});

module.exports = NewTaskForm;
