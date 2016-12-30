var AppDispatcher = require('../dispatcher/AppDispatcher');

function completedTask(taskId) {
  var action = {
    type: 'completed_task',
    taskId: taskId
  };

  AppDispatcher.dispatch(action);
}
function undoCompletedTask(taskId) {
  var action = {
    type: 'undo_completed_task',
    taskId: taskId
  };
  AppDispatcher.dispatch(action);
}
function addNewTask(taskName) {
  var action = {
    type: 'add_new_task',
    taskName: taskName
  };
  AppDispatcher.dispatch(action);
}
function deleteTask(taskId) {
  var action = {
    type: 'delete_task',
    taskId: taskId
  };
  AppDispatcher.dispatch(action);
}

module.exports = {
  completedTask: completedTask,
  undoCompletedTask: undoCompletedTask,
  addNewTask: addNewTask,
  deleteTask: deleteTask
};
