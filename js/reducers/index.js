var actions = require('../actions/index');

var initialDigestState = {
  subreddits: localStorage.getItem('subreddits') || [],
  numPosts: localStorage.getItem('numPosts') || null,
  timePeriod: localStorage.getItem('timePeriod') || '',
  multiredditData: []
};

var multiredditDigestReducer = function(state, action) {
  state = state || initialDigestState;
  if (action.type === actions.NEW_DIGEST) {
    var subreddits = processMultireddit(action.multireddit);

    localStorage.setItem('numPosts', action.numPosts);
    localStorage.setItem('timePeriod', action.timePeriod);
    localStorage.setItem('subreddits', subreddits);

    return Object.assign({}, state, {
      subreddits: subreddits,
      numPosts: action.numPosts,
      timePeriod: action.timePeriod,
      multiredditData: []
    });
  }
  else if (action.type === actions.FETCH_SUBDATA_SUCCESS) {
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


var processMultireddit = function(multireddit) {
  var startAt = multireddit.indexOf('r/') + 2;
  var lastChar = multireddit.charAt(multireddit.length - 1);
  var subString;

  if (lastChar === '/') {
    subString = multireddit.slice(startAt, -1);
  } else {
    subString = multireddit.slice(startAt);
  }
  var subredditArray = subString.split('+');
  return subredditArray;
};

exports.multiredditDigestReducer = multiredditDigestReducer;
