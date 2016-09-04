const React = require('react');

const PlayerStore = require('../stores/player_store');
const YtidStore = require('../stores/ytid_store');

const YtActions = require('../actions/yt_actions');

let _listeners = [];

module.exports = React.createClass({
  getInitialState () {
    return {track: null, playing: false, audio_url: null, loading: false};
  },
  componentWillMount () {
    _listeners.push(PlayerStore.addListener(this._onPlayerChange));
    _listeners.push(YtidStore.addListener(this._onYtidChange));
  },
  componentWillUnmount () {
    _listeners.forEach(listener => listener.remove());
  },
  _onPlayerChange () {
    this.setState({track: PlayerStore.track(), loading: true, playing: false}, function () {
      YtActions.fetchYtid(this.state.track);
    });
  },
  _onYtidChange () {
    const track = this.state.track;
    if (track && YtidStore.hasId(track)) {
      this.setState({loading: false, audio_url: YtidStore.getUrl(track)});
    }
  },
  _showPlayer () {
    console.log('show player');
  },
  _playPause () {
    if (!this.state.audio_url) { return; }
    if (this.state.playing) {
      document.getElementById('audio-player').pause();
      this.setState({playing: false});
    } else {
      document.getElementById('audio-player').play();
      this.setState({playing: true});
    }
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
          {!this.state.loading && this.state.audio_url ?
              <audio id="audio-player">
                <source src={this.state.audio_url} />
              </audio> : ""}
          <div className='player-bar-item' onClick={this._stepBack}>
            <i className='glyphicon glyphicon-step-backward' />
          </div>
          <div className='player-bar-item' onClick={this._playPause}>
            {this.state.loading ?
              <div className="spinner"></div> :
              (this.state.playing ?
                <i className='glyphicon glyphicon-pause' /> :
                <i className='glyphicon glyphicon-play' />)
            }

          </div>
          <div className='player-bar-item' onClick={this._stepForward}>
            <i className='glyphicon glyphicon-step-forward' />
          </div>
          <div className='player-bar-item'>
            <img src={this.state.track.image_url} />
          </div>
          <div className='player-bar-item' onClick={this._showPlayer}>
            <i className='glyphicon glyphicon-chevron-up' />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
});
