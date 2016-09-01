const React = require('react');
const ReactRouter = require('react-router');
const ReactDOM = require('react-dom');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

// route components
const App = require('./components/app');
const Splash = require('./components/splash');
const SearchResults = require('./components/search_results');
const Player = require('./components/player');

// Routes
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />
    <Route path="/results/:query" component={SearchResults} />
    <Route path="/player" component={Player} />
  </Route>
);

// init Router
document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>,
                  document.getElementById('root'));
});
