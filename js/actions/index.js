var fetch = require('isomorphic-fetch');

var NEW_DIGEST = 'NEW_DIGEST';
var newDigest = function() {
  return {
    type: NEW_DIGEST
  };
};

var FETCH_SUBDATA_SUCCESS = 'FETCH_SUBDATA_SUCCESS';
var fetchSubdataSuccess = function(name, data) {
  return {
    type: FETCH_SUBDATA_SUCCESS,
    name: name,
    data: data
  };
};

var FETCH_SUBDATA_ERROR = 'FETCH_SUBDATA_ERROR';
var fetchSubdataError = function(error) {
  return {
    type: FETCH_SUBDATA_ERROR,
    error: error
  };
};

var fetchSubdata = function(subreddit) {
  return function(dispatch) {
      var url = 'http://www.reddit.com/r/' + subreddit + '/top.json?t=day&limit=5';
      return fetch(url).then(function(response) {
          if (response.status < 200 || response.status >= 300) {
              var error = new Error(response.statusText);
              error.response = response;
              throw error;
          }
          return response;
      })
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          return dispatch(
              fetchSubdataSuccess(subreddit, data)
          );
      })
      .catch(function(error) {
          return dispatch(
              fetchSubdataError(error)
          );
      });
  };
};

exports.NEW_DIGEST = NEW_DIGEST;
exports.newDigest = newDigest;
exports.FETCH_SUBDATA_SUCCESS = FETCH_SUBDATA_SUCCESS;
exports.fetchSubdataSuccess = fetchSubdataSuccess;
exports.FETCH_SUBDATA_ERROR = FETCH_SUBDATA_ERROR;
exports.fetchSubdataError = fetchSubdataError;
exports.fetchSubdata = fetchSubdata;
