const React = require('react');

const TrackStore = require('../stores/track_store');

const TrackIndexItem = require('./track_index_item');

const _listeners = [];

module.exports = React.createClass({
  getInitialState () {
    return {tracks: [], loading: true};
  },
  componentWillMount () {
    window.addEventListener('scroll', this._onScroll);
    _listeners.push(TrackStore.addListener(this._onTrackChange));

    this.props.fetchInitialTracks();
  },
  componentWillReceiveProps (newProps) {
    this.setState({tracks: [], loading: true});
    newProps.fetchInitialTracks();
  },
  componentWillUnmount () {
   window.removeEventListener('scroll', this._onScroll);
   _listeners.forEach(listener => listener.remove());
  },
  _onTrackChange () {
    console.log('tracks');
    this.setState({tracks: TrackStore.tracks(), loading: false});
  },
  _onScroll () {
    const maxScrollY = $('.main-content').height() - (2 * window.innerHeight);
    if (!this.state.loading && window.scrollY >= maxScrollY) {
      this.setState({loading: true});
      const offset = this.state.tracks.length;
      this.props.fetchMoreTracks(offset);
    }
  },
  render () {
    return (
      <div className='track-index'>
        {this.state.tracks.map(track => {
          return <TrackIndexItem track={track} key={track.id} />;
        })}
      </div>
    );
  }
});
