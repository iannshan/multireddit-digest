var React = require('react');

var Subreddit = require('./subreddit');

var SubredditList = function(props) {
  var multireddit = Object.keys(props.multireddit).map(function(subredditId, index) {
    var subreddit = props.multireddit[subredditId];
    return (
      <li key={index}>
        <Subreddit id={subreddit.id} name={subreddit.name}
                 posts={subreddit.posts} />
      </li>
    );
  });
  return (
    <ul>
      {multireddit}
    </ul>
  );
};

module.exports = SubredditList;
