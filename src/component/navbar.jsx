import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  searchItem = () => {
    // Add your search functionality here
    console.log('Searching for:', this.state.searchValue);
  }

  add = (item) => {
    // Add your add item functionality here
    console.log('Adding item:', item);
  }

  returnHome = () => {
    // Add your return home functionality here
    console.log('Returning home...');
  }

  render() {
    return (
      <div>
        <div className="backgroung_circles">
          <div className="c1"></div>
          <div className="c2"></div>
          <div className="c3"></div>
          <div className="c4"></div>
        </div>
        <div className="navbar">
          <div className="logo" onClick={this.returnHome}>
            <img src={this.props.logoSrc} alt="Logo" />
            <span>Deal Detective</span>
          </div>
          <div className="search_bar_products">
            <div className="searchbar">
              <span className="search">
                <input type="text" placeholder="search For Products Brands And More" name="input" id="search_bar" value={this.state.searchValue} onChange={this.handleChange} />
                <i className="fa fa-search" aria-hidden="true" id="search_icon" onClick={this.searchItem} style={{ color: 'black' }}></i>
              </span>
            </div>
            <div className="shortcuts">
              <ul className="clickable" onClick={() => this.add('phone')}>
                <li>
                  <i className="fa fa-mobile" aria-hidden="true" id="phone"></i>
                  Mobile
                </li>
              </ul>
              {/* Repeat similar ul elements for other shortcuts */}
            </div>
          </div>
          <div className="buttons_login">
            <button id="btn_signup">Login</button>
            <button id="btn_login">Signup</button>
            <div className="logout" id="logout_btn">{/* Include your login button component here */}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
