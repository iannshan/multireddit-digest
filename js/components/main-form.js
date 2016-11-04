var React = require('react');
var connect = require('react-redux').connect;
var router = require('react-router');
var hashHistory = router.hashHistory;


var actions = require('../actions/index');

var MainForm = React.createClass({
  getDigest: function() {
    var multireddit = this.refs.multireddit.value;
    var subredditArray = processMultireddit(multireddit);
    for (var i = 0; i < subredditArray.length; i++) {
      this.props.dispatch(actions.fetchSubdata(subredditArray[i]));
    }
    hashHistory.push('/digest');
  },
  render: function() {
    return (
        <div className="main-form">
          <h2>Paste the link to your Multireddit below:</h2>
          <input type="text" ref="multireddit"/>
          <button type="button" onClick={this.getDigest}>Get Digest!</button>
        </div>
    );
  }
});

var processMultireddit = function(multireddit) {
  var startAt = multireddit.indexOf('r/') + 2;
  var subString = multireddit.slice(startAt, -1);
  var subredditArray = subString.split('+');
  console.log(subredditArray);
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
