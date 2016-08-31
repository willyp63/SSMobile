const React = require('react');

module.exports = React.createClass({
  render () {
    return (
      <div className='nav-bar'>
        <div className='ss-logo'>
          <img src='/assets/ss-logo.png' />
        </div>
        <form className="search-bar" onSubmit={this._onSearch}>
          <input className="search-field"
                 type="text"
                 autoComplete="off"
                 placeholder="Search..."
                 onChange={this._onQueryChange}>
          </input>
          <i className="glyphicon glyphicon-search"
             onClick={this._onSearch} />
        </form>
        <div className='info-button'>
          ?
        </div>
      </div>
    );
  }
});
