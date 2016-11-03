var actions = require('../actions/index');

var initialDigestState = {
  multireddit: '',
  multiredditData: []
};

var multiredditDigestReducer = function(state, action) {
  console.log('Action:', action);
  state = state || initialGameState;
  console.log('State:', state);
  if (action.type === actions.NEW_DIGEST) {
    return Object.assign({}, state, {
      multireddit: '',
      multiredditData: []
    });
  }
  else if (action.type === actions.FETCH_SUBDATA_SUCCESS) {
    return Object.assign({}, state, {
      multiredditData: action.subdata
    });
  }
  else if (action.type === actions.FETCH_SUBDATA_ERROR) {
    // handle error
  }
  return state;
};

exports.multiredditDigestReducer = multiredditDigestReducer;
