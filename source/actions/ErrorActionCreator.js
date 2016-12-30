var AppDispatcher = require('../dispatcher/AppDispatcher');

function addErrorMessages(errorMessages) {
  var action = {
    type: 'add_error_messages',
    errorMessages: errorMessages
  };

  AppDispatcher.dispatch(action);
}

module.exports = {
  addErrorMessages: addErrorMessages
}
