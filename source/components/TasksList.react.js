var React = require('react');
var Task = require('./Task.react');
var TasksStore = require('../stores/TasksStore');
var TaskActionCreators = require('../actions/TaskActionCreators');

var TasksList = React.createClass({
  getInitialState: function() {
    return {
      tasks: TasksStore.getCollectionTasks()
    };
  },
  getListOfTaskIds: function() {
    return Object.keys(this.state.tasks);
  },
  getTaskElement: function(taskId) {
    var task = this.state.tasks[taskId];
    var taskElement;

    taskElement = (<Task task={task} handleRemoveButtonClicked={this.handleRemoveButtonClicked} />);
    return (<div key={task.id}>{taskElement}</div>);
  },
  onTaskChanges: function() {
    this.setState({
      tasks: TasksStore.getCollectionTasks()
    });
  },
  handleRemoveButtonClicked: function(taskId) {
    TaskActionCreators.deleteTask(taskId);
  },
  componentDidMount: function() {
    TasksStore.addChangeListener(this.onTaskChanges);
  },
  componentWillUnmount: function() {
    TasksStore.removeChangeListener(this.onTaskChanges);
  },
  render: function() {
    var taskElements = this.getListOfTaskIds().map(this.getTaskElement);

    return (
      <div id="tasks-list">
        <h2>Tasks List</h2>
        {taskElements}
      </div>
    );
  }
});

module.exports = TasksList;
