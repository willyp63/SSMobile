const SPOTIFY_SEARCH_URL = 'https://api.spotify.com/v1/search';

module.exports = {
  fetchTracks (query, limit, offset, returnTracks) {
    $.ajax({
      url: SPOTIFY_SEARCH_URL,
      data: {q: query, type: 'track', limit: limit, offset: offset},
      success: function (response) {
        let tracks = response.tracks.items.map(extractTrack);
        returnTracks(tracks);
      },
      error: function () {
        console.log('!!!Falied to connect to Spotify!!!');
      }
    });
  }
};

function extractTrack (track) {
 const hasImage = !!track.album.images.length;
 return {title: track.name,
         image_url: (hasImage ? track.album.images[0].url : ""),
         artists: track.artists.map(artist => artist.name),
         id: track.id,
         duration_sec: track.duration_ms / 1000};
}
