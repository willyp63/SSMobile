const Searcher = require('../search/searcher');

// store requests until gapi has loaded
let _gapiLoaded = false;
let _unprocessedRequests = [];
window.onClientLoad = function () {
  gapi.client.load('youtube', 'v3', function () {
    gapi.client.setApiKey('AIzaSyD8hbRI2KVPzef84BQPtkwcqXD9XcTLgbE');
    _gapiLoaded = true;
    processUnprocessedRequests();
  });
};

function processUnprocessedRequests () {
  _unprocessedRequests.forEach(request => {
    processRequest(request[0], request[1], request[2]);
  });
  _unprocessedRequests = [];
}

// EXPORTS
module.exports = {
  fetchYtid (track, options, cb) {
    if (_gapiLoaded) {
      processRequest(track, options, cb);
    } else {
      console.log('storing');
      // store request to process later
      _unprocessedRequests.push([track, options, cb]);
    }
  }
};

function processRequest (track, options, cb) {
  new Searcher(track, options).search(function (bestItem) {
    // return ytid
    cb(bestItem ? bestItem.id.videoId : null);
  });
}
