var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var SubredditList = require('./subreddit-list');

var DigestListContainer = React.createClass({
  componentDidMount: function() {

    var numPosts = this.props.numPosts;
    var timePeriod = this.props.timePeriod;
    var subreddits = this.props.subreddits;

    if (typeof subreddits === 'string') {
      subreddits = subreddits.split(',');
    }

    for (var i = 0; i < subreddits.length; i++) {
      this.props.dispatch(actions.fetchSubdata(numPosts, timePeriod, subreddits[i]));
    }
  },
  render: function() {
    return (
      <div>
        <SubredditList multiredditData={this.props.multiredditData} />
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    subreddits: state.subreddits,
    numPosts: state.numPosts,
    timePeriod: state.timePeriod,
    multiredditData: state.multiredditData
  };
};

var Container = connect(mapStateToProps)(DigestListContainer);

module.exports = Container;
