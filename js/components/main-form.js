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

    this.props.dispatch(actions.newDigest(multireddit, numPosts, timePeriod));

    hashHistory.push('/digest');
  },
  render: function() {
    return (
        <div className="main-form">
          <h2>Paste the link to your Multireddit* below:</h2>
          <p>(For example: https://www.reddit.com/r/startups+technology+web_design+webdev/)</p>
          <input type="text" ref="multireddit" className="multireddit-input" />
          <label htmlFor="posts">Max posts to show per sub: </label>
          <input type="number" defaultValue="5" name="posts" ref="numPosts" className="max-posts" />
          <br/>
          <label htmlFor="timePeriod">Time period: </label>
          <select name="timePeriod" ref="timePeriod" className="time-period">
            <option value="day">Past 24 Hours</option>
            <option value="week">Past Week</option>
            <option value="month">Past Month</option>
            <option value="year">Past Year</option>
            <option value="all">All Time</option>
          </select>
          <br/>
          <button type="button" onClick={this.getDigest} className="get-digest text-center center-block btn btn-primary">Get Digest!</button>
          <p className="instructions">*Find your Multireddit by logging in to your desired Reddit account, navigating to <a href="https://www.reddit.com/subreddits/">https://www.reddit.com/subreddits/</a>, and right-clicking "multireddit of your subscriptions" in the right side panel to copy the URL.</p>
        </div>
    );
  }
});


var mapStateToProps = function(state, props) {
  return {
    multireddit: state.multireddit,
    multiredditData: state.multiredditData
  };
};

var Container = connect(mapStateToProps)(MainForm);

module.exports = Container;
