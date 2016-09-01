const React = require('react');

const PlayerActions = require('../actions/player_actions');

module.exports = React.createClass({
  _playTrack () {
    PlayerActions.playTrack(this.props.track);
  },
  render () {
    return (
      <div className='track-index-item' onClick={this._playTrack}>
        <img className='track-album-image' src={this.props.track.image_url} />
        <div className='track-title'>{this.props.track.title}</div>
        <div className='track-artist'>{this.props.track.artists[0]}</div>
      </div>
    );
  }
});
