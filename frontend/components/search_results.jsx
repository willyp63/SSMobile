const React = require('react');

const SpotifyActions = require('../actions/spotify_actions');

const TrackIndex = require('../components/track_index');

const INITIAL_REQUEST_SIZE = 10;
const ADDITIONAL_REQUEST_SIZE = 10;

module.exports = React.createClass({
  decodedQuery () {
    return decodeURIComponent(this.props.params.query);
  },
  _fetchInitialTracks () {
    SpotifyActions.fetchTracks(this.decodedQuery(), INITIAL_REQUEST_SIZE, 0);
  },
  _fetchMoreTracks (offset) {
    SpotifyActions.fetchTracks(this.decodedQuery(), ADDITIONAL_REQUEST_SIZE, offset);
  },
  render () {
    return (
      <div className='search-results'>
        <TrackIndex fetchInitialTracks={this._fetchInitialTracks}
                    fetchMoreTracks={this._fetchMoreTracks} />
      </div>
    );
  }
});

function decodedQuery () {

}
