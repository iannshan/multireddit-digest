var React = require('react');
var moment = require('moment');

var Post = function(props) {
  var postDate = new moment(props.data.created*1000).format('MMM Do YYYY, h:mm a');
  return (
    <div className="post">
      <h3><a href={props.data.url} target="_blank">{props.title}</a></h3>
      <p>Comments: <a href={"https://www.reddit.com"+props.data.permalink} target="_blank">{props.data.num_comments}</a> Submitted by <a href={"https://www.reddit.com/user/"+props.data.author} target="_blank">{props.data.author}</a> on {postDate}</p>
    </div>
  );
};

module.exports = Post;
