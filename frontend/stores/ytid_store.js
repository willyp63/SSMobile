const Store = require('flux/utils').Store;
const dispatcher = require('../dispatcher');

const NODE_SERVER_URL = 'thawing-bastion-97540.herokuapp.com';
const YTDL_URL_PREFIX = `http://${NODE_SERVER_URL}/stream`;
const _ids = {};

const YtidStore = new Store(dispatcher);

YtidStore.hasId = function (track) {
  return !!(_ids[track.id]);
};

YtidStore.getId = function (track) {
  return _ids[track.id];
};

YtidStore.getUrl = function (track) {
  return `${YTDL_URL_PREFIX}?ytid=${_ids[track.id]}&encoding=${window.REQUIRED_ENCODING}`;
};

YtidStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECIEVE_YTID":
      _ids[payload.track.id] = payload.ytid;
      this.__emitChange();
      break;
  }
};

module.exports = YtidStore;
