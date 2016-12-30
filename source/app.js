var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');

if (typeof window !== 'undefined') {
  window.React = React;
}

ReactDOM.render(<Application />, document.getElementById('taskslist-application'));
