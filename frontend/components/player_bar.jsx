const React = require('react');

const PlayerStore = require('../stores/player_store');

let _listeners = [];

module.exports = React.createClass({
  getInitialState () {
    return {track: PlayerStore.track()};
  },
  componentWillMount () {
    _listeners.push(PlayerStore.addListener(this._onPlayerChange));
  },
  componentWillUnmount () {
    _listeners.forEach(listener => listener.remove());
  },
  _onPlayerChange () {
    this.setState({track: PlayerStore.track()});
  },
  _showPlayer () {
    console.log('show player');
  },
  _playPause () {
    console.log('player pause');
  },
  _stepBack () {
    console.log('step back');
  },
  _stepForward () {
    console.log('step forward');
  },
  render () {
    // only show player bar if there is a track
    if (this.state.track) {
      return (
        <div className='player-bar'>
          <div className='player-bar-item' onClick={this._stepBack}>
            <i className='glyphicon glyphicon-step-backward' />
          </div>
          <div className='player-bar-item' onClick={this._playPause}>
            <i className='glyphicon glyphicon-play' />
          </div>
          <div className='player-bar-item' onClick={this._stepForward}>
            <i className='glyphicon glyphicon-step-forward' />
          </div>
          <div className='player-bar-item'>
            <img src={this.state.track.image_url} />
          </div>
          <div className='player-bar-item' onClick={this._showPlayer}>
            <i className='glyphicon glyphicon-chevron-right' />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
});
