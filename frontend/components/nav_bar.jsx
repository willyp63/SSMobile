const React = require('react');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  _onHome () {
    hashHistory.push('/');
  },
  _onSearch (e) {
    e.preventDefault();
    const queryString = e.target.query.value;
    const queryComponent = encodeURIComponent(queryString);
    hashHistory.push(`/results/${queryComponent}`);
  },
  _onQueryChange () {
    console.log('query change');
  },
  _onInfo () {
    console.log('on info');
  },
  render () {
    return (
      <div className='nav-bar'>
        <div className='ss-logo' onClick={this._onHome}>
          <img src='/ss-logo.png' />
        </div>
        <form className="search-bar" onSubmit={this._onSearch}>
          <input className="search-field"
                 type="text"
                 name="query"
                 autoComplete="off"
                 placeholder="Search..."
                 onChange={this._onQueryChange}>
          </input>
          <i className="glyphicon glyphicon-search"
             onClick={this._onSearch} />
        </form>
        <div className='info-button' onClick={this._onInfo}>
          ?
        </div>
      </div>
    );
  }
});
