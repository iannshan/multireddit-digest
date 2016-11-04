var React = require('react');

var Post = function(props) {
  return (
    <div className="post">
      <h3><a href={props.data.permalink}>{props.title}</a></h3>
      <p>Score: {props.data.score} Submitted by <a href={"https://www.reddit.com/user/"+props.data.author}>{props.data.author}</a></p>
    </div>
  );
};

module.exports = Post;
