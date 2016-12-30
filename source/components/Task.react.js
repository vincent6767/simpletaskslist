var React = require('react');
var Button = require('./Button.react');
var Checkbox = require('./Checkbox.react');
var TaskActionCreators = require('../actions/TaskActionCreators');
var TasksStore = require('../stores/TasksStore');

var Task = React.createClass({
  propTypes: {
    task: function(properties, propertyName, componentName) {
      var task = properties[propertyName];

      if (!task) {
        return new Error('Task must be set!');
      }
    }
  },
  getInitialState: function() {
    return {
      task: this.props.task
    };
  },
  handleChange: function(taskId, event) {
    if (event.target.checked) {
      TaskActionCreators.completedTask(taskId);
    } else {
      TaskActionCreators.undoCompletedTask(taskId);
    }
  },
  componentWillUnmount: function() {
    TasksStore.removeChangeListener(this.onTaskStateChange);
  },
  componentDidMount: function() {
    TasksStore.addChangeListener(this.onTaskStateChange);
  },
  onTaskStateChange: function() {
    this.setState({
      task: TasksStore.getTask(this.state.task.id)
    });
  },
  handleClick: function(event) {
    this.props.handleRemoveButtonClicked(this.state.task.id);
  },
  render: function() {
    var task = this.state.task;

    return (
      <div className="row">
        <div className="col-md-2 co-sm-12">
          <Checkbox labelText={task.name} id={task.id} isComplete={task.isCompleted} handleChange={this.handleChange}/>
        </div>
        <div className="col-md-10 col-12">
          <Button text="X" handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
});

module.exports = Task;
