var React = require('react');
var NewTaskForm = require('./NewTaskForm.react');
var ErrorMessages = require('./ErrorMessages.react');
var ErrorMessagesStore = require('../stores/ErrorMessagesStore');

var NewTaskControls = React.createClass({
  getInitialState: function() {
    return {
      errorMessages: ErrorMessagesStore.getErrorMessages()
    };
  },
  addNewErrorMessage: function(errorMessage) {
    var errorMessages = [];
    errorMessages.push(errorMessage);
    this.setState({
      errorMessages: errorMessages
    });
  },
  onErrors: function() {
    this.setState({
      errorMessages: ErrorMessagesStore.getErrorMessages()
    });
  },
  componentDidMount: function() {
    ErrorMessagesStore.addChangeListener(this.onErrors);
  },
  componentWillUnmount: function() {
    ErrorMessagesStore.removeChangeListener(this.onErrors);
  },
  handleOnError: function(errorMessage) {
    this.addNewErrorMessage(errorMessage);
  },
  render: function() {
    return (
      <div>
        <h2>New Task</h2>
        <hr />
        <NewTaskForm handleOnError={this.handleOnError}/>
        <div className="row">
          <div className="col-md-12">
            <ErrorMessages messages={this.state.errorMessages} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NewTaskControls;
