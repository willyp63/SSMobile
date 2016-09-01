const dispatcher = require('../dispatcher');
const SpotifyApi = require('../utils/api/spotify_api');

module.exports = {
  fetchTracks (query, limit, offset) {
    SpotifyApi.fetchTracks(query, limit, offset,
      offset ? this.appendTracks : this.receiveTracks);
  },
  receiveTracks (tracks) {
    dispatcher.dispatch({
      actionType: 'RECEIVE_TRACKS',
      tracks: tracks
    });
  },
  appendTracks (tracks) {
    dispatcher.dispatch({
      actionType: 'APPEND_TRACKS',
      tracks: tracks
    });
  }
};
