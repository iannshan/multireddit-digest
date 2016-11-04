var React = require('react');

var Post = require('./post');

var Subreddit = function(props) {
  var posts = [];
  var postsData = props.data.children;
  for (var i = 0; i < postsData.length; i++) {
    posts.push(<Post key={i} title={postsData[i].data.title} data={postsData[i].data} />);
  }
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
