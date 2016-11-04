var React = require('react');

var Subreddit = require('./subreddit');

var SubredditList = function(props) {
  var multireddit = [];
  for (var i = 0; i < props.multiredditData.length; i++) {
    multireddit.push(<Subreddit key={i} name={props.multiredditData[i].name} data={props.multiredditData[i].data} />);
  }
  return (
    <ul>
      {multireddit}
    </ul>
  );
};

module.exports = SubredditList;
