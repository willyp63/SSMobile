const dispatcher = require('../dispatcher');
const YtApi = require('../utils/api/yt_api');

module.exports = {
  fetchYtid (track, options = {'blacklistIds': [], 'logs': false}) {
    YtApi.fetchYtid(track, options, function (ytid) {
      console.log(ytid);
      dispatcher.dispatch({
        actionType: 'RECIEVE_YTID',
        track: track,
        ytid: ytid
      });
    });
  }
};
