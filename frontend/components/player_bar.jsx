const React = require('react');

module.exports = React.createClass({
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
          <img src='blank' />
        </div>
        <div className='player-bar-item' onClick={this._showPlayer}>
          <i className='glyphicon glyphicon-chevron-right' />
        </div>
      </div>
    );
  }
});
