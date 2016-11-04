var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var store = require('./store');

var App = require('./components/app');
var MainForm = require('./components/main-form');
var DigestListContainer = require('./components/digest-list-container');

var routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={MainForm}/>
          <Route path="/digest" component={DigestListContainer} />
        </Route>
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
