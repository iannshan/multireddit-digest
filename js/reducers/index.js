var actions = require('../actions/index');

var initialDigestState = {
  multireddit: '',
  multiredditData: []
};

var multiredditDigestReducer = function(state, action) {
  state = state || initialDigestState;
  if (action.type === actions.NEW_DIGEST) {
    return Object.assign({}, state, {
      multireddit: '',
      multiredditData: []
    });
  }
  else if (action.type === actions.FETCH_SUBDATA_SUCCESS) {
    // if (multiredditData.length === multireddit.length - 1) {
    // push hashHistory to /digest
    // }
    return Object.assign({}, state, {
      multiredditData: state.multiredditData.concat({
        name: action.name,
        data: action.data.data
      })
    });
  }
  else if (action.type === actions.FETCH_SUBDATA_ERROR) {
    console.log(action.error);
  }
  return state;
};

exports.multiredditDigestReducer = multiredditDigestReducer;
