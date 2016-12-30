var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var errorMessages = [];

function addNewErrorMessages(errors) {
  errorMessages = errors;
}
function removeAllErrorMessages() {
  errorMessages = [];
}

function emitChange() {
  ErrorMessagesStore.emit(CHANGE_EVENT);
}

var ErrorMessagesStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getErrorMessages: function() {
    return errorMessages;
  }
});

function handleAction(action) {
  switch (action.type) {
    case 'add_new_task':
      removeAllErrorMessages();
      emitChange();
      break;
    case 'add_error_messages':
      addNewErrorMessages(action.errorMessages);
      emitChange();
      break;
    default:
      //do nothing
  }
}

ErrorMessagesStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = ErrorMessagesStore;
