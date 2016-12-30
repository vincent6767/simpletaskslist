var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var collectionTask = {};
var currentCreatedId = 1;

function addNewTask(taskName) {
  collectionTask[currentCreatedId] = {
    id: currentCreatedId,
    name: taskName,
    isCompleted: false
  };
  incrementCreatedId();
}
function deleteTask(taskId) {
  delete collectionTask[taskId];
}
function completedTask(taskId) {
  collectionTask[taskId].isCompleted = true;
}
function undoCompletedTask(taskId) {
  collectionTask[taskId].isCompleted = false;
}
function incrementCreatedId() {
  currentCreatedId++;
}
function emitChange() {
  console.log(collectionTask);
  TasksStore.emit(CHANGE_EVENT);
}

var TasksStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getCollectionTasks: function() {
    return collectionTask;
  },
  getTask: function(id) {
    return collectionTask[id];
  }
});

function handleAction(action) {
  switch (action.type) {
    case 'completed_task':
      completedTask(action.taskId);
      emitChange();
      break;
    case 'undo_completed_task':
      undoCompletedTask(action.taskId);
      emitChange();
      break;
    case 'add_new_task':
      addNewTask(action.taskName);
      emitChange();
      break;
    case 'delete_task':
      deleteTask(action.taskId);
      emitChange();
      break;
    default:
      //do nothing to our cruel world!
  }
}

TasksStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = TasksStore;
