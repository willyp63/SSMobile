const React = require('react');

const PlayerStore = require('../stores/player_store');

const NavBar = require('./nav_bar');
const PlayerBar = require('./player_bar');

let _listeners = [];

// always render nav bar and then child component
module.exports = React.createClass({
  componentWillMount () {
    _listeners.push(PlayerStore.addListener(this._onPlayerChange));
  },
  componentDidMount () {
    resizeMainContent();
  },
  componentWillUnmount () {
    _listeners.forEach(listener => listener.remove());
  },
  _onPlayerChange () {
    resizeMainContent();
  },
  render () {
    return (
      <div>
        <NavBar />
        <div className='main-content'>
          {this.props.children}
        </div>
        <PlayerBar />
      </div>
    );
  }
});

function resizeMainContent () {
  // resize main content based on player bar being active
  if (PlayerStore.track()) {
    $('.main-content').height('68vh');
  } else {
    $('.main-content').height('78vh');
  }
}
