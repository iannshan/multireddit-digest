var React = require('react');

var Post = require('./post');

var Subreddit = function(props) {
  var posts = Object.keys(props.posts).map(function(postId, index) {
    var post = props.posts[postId];
    return (
      <li key={index}>
        <Post id={post.id} name={post.title} url={post.url} score={post.score}
              author={post.author} timeSubmitted={post.date} />
      </li>
    );
  });
  return (
    <div className="subreddit">
      <h2>{props.name}</h2>
      <ul>
        {posts}
      </ul>
    </div>
  );
};

module.exports = Subreddit;
