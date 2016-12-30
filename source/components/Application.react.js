var React = require('react');
var TasksList = require('./TasksList.react');
var NewTaskControls = require('./NewTaskControls.react');

var Application = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <NewTaskControls />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <TasksList />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Application;
