var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var MainForm = React.createClass({
  getDigest: function() {
    var multireddit = this.refs.multireddit.value;
    this.props.dispatch(actions.fetchSubdata(multireddit));
    // navigate to the digest route
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

var mapStateToProps = function(state, props) {
  return {
    multireddit: state.multireddit,
    multiredditData: state.multiredditData
  };
};

var Container = connect(mapStateToProps)(MainForm);

module.exports = Container;
