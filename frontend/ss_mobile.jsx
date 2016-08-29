const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;

const NavBar = require('./components/nav_bar');

// always render nav bar and then child component
const App = React.createClass({
  render () {
    return (
      <div>
        <NavBar />
        <div className='main-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

// route components
const Splash = require('./components/splash');
const SearchResults = require('./components/search_results');
const Player = require('./components/player');

// Routes
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />
    <Route path="/search_results/:query" component={SearchResults} />
    <Route path="/player" component={Player} />
  </Route>
);

// init Router
document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>,
                  document.getElementById('root'));
});
