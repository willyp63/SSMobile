const Store = require('flux/utils').Store;
const dispatcher = require('../dispatcher');

let _tracks;

const TrackStore = new Store(dispatcher);

TrackStore.tracks = function () {
  return _tracks;
};

TrackStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'RECEIVE_TRACKS':
      _tracks = payload.tracks;
      this.__emitChange();
      break;
    case 'APPEND_TRACKS':
      _tracks = _tracks || [];
      _tracks = _tracks.concat(payload.tracks);
      this.__emitChange();
      break;
  }
};

module.exports = TrackStore;
