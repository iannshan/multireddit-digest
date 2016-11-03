// like the ContactListContainer

var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var SubredditList = require('./subreddit-list');

var DigestListContainer = React.createClass({
  render: function() {
    return (
        <SubredditList multireddit={this.props.multireddit} />
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    multireddit: state.multireddit,
    multiredditData: state.multiredditData
  };
};

var Container = connect(mapStateToProps)(DigestListContainer);

module.exports = Container;
