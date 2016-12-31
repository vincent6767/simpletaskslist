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
  onAddNewTask: function() {
    var taskName = this.state.inputValue;

    if (!taskName) {
      ErrorActionCreator.addErrorMessages(['Task name is not allowed to be empty']);
    } else {
      TaskActionCreators.addNewTask(taskName);
    }
    this.setInputValue('');
  },
  handleFormSubmit: function(event) {
    event.preventDefault();

    this.onAddNewTask();
  },
  handleOnKeydown: function(event) {
    if (event.keyCode == 13) {
      this.handleFormSubmit(event);
    }
  },
  render: function() {
    return (
      <form className="form-inline" id="new-task-form">
        <div className="form-group">
          <Label text="New Task Name: " type="textfield"><Textfield handleInputValueChange={this.handleInputValueChange} handleOnKeydown={this.handleOnKeydown} name="newTaskName" initialValue={this.state.inputValue} /></Label>
        </div>
        <Button text="Add" type="button" handleClick={this.handleFormSubmit}/>
      </form>
    );
  }
});

module.exports = NewTaskForm;
