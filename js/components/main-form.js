var React = require('react');
var connect = require('react-redux').connect;
var router = require('react-router');
var hashHistory = router.hashHistory;


var actions = require('../actions/index');

var MainForm = React.createClass({
  getDigest: function() {
    var multireddit = this.refs.multireddit.value;
    var numPosts = this.refs.numPosts.value;
    var timePeriod = this.refs.timePeriod.value;

    var subredditArray = processMultireddit(multireddit);
    for (var i = 0; i < subredditArray.length; i++) {
      this.props.dispatch(actions.fetchSubdata(numPosts, timePeriod, subredditArray[i]));
    }
    hashHistory.push('/digest');
  },
  render: function() {
    return (
        <div className="main-form">
          <h2>Paste the link to your Multireddit below:</h2>
          <p>(For example: https://www.reddit.com/r/startups+technology+web_design+webdev/)</p>
          <input type="text" ref="multireddit" />
          <br/>
          <label htmlFor="posts">Max posts to show per sub: </label>
          <input type="number" defaultValue="5" name="posts" ref="numPosts" />
          <br/>
          <label htmlFor="timePeriod">Time period: </label>
          <select name="timePeriod" ref="timePeriod">
            <option value="day">Past 24 Hours</option>
            <option value="week">Past Week</option>
            <option value="month">Past Month</option>
            <option value="year">Past Year</option>
            <option value="all">All Time</option>
          </select>
          <br />
          <button type="button" onClick={this.getDigest}>Get Digest!</button>
        </div>
    );
  }
});

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

var mapStateToProps = function(state, props) {
  return {
    multireddit: state.multireddit,
    multiredditData: state.multiredditData
  };
};

var Container = connect(mapStateToProps)(MainForm);

module.exports = Container;
