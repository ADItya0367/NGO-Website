import React from 'react'
import logo from './sai.png';

export default function Navigation() {
  return (
    <div>
      {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark back">
    {/* Container wrapper */}
    <div className="container">
      {/* Navbar brand */}
      <a className="navbar-brand" href="/#"><img id="MDB-logo" src={logo} alt="MDB Logo" draggable="false" height={50} /></a>
      {/* Toggle button */}
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Left links */}
        <ul className="navbar-nav me-3">
          <li className="nav-item">
            <a className="nav-link active d-flex align-items-center" aria-current="page" href="/#"><i className="fas fa-bars pe-2" />Menu</a>
          </li>
        </ul>
        {/* Left links */}
        <form className="d-flex align-items-center w-100 form-search">
          <div className="input-group">
            <button className="btn btn-light dropdown-toggle shadow-0" type="button" data-mdb-toggle="dropdown" aria-expanded="false" style={{paddingBottom: '0.4rem'}}>
              All
            </button>
            <ul className="dropdown-menu dropdown-menu-dark fa-ul">
              <li>
                <a className="dropdown-item" href="/#"><span className="fa-li pe-2"><i className="fas fa-search" /></span>All</a>
              </li>
              <li>
                <a className="dropdown-item" href="/#"><span className="fa-li pe-2"><i className="fas fa-film" /></span>Titles</a>
              </li>
              <li>
                <a className="dropdown-item" href="/#"><span className="fa-li pe-2"><i className="fas fa-tv" /></span>TV
                  Episodes</a>
              </li>
              <li>
                <a className="dropdown-item" href="/#"><span className="fa-li pe-2"><i className="fas fa-user-friends" /></span>Celebs</a>
              </li>
              <li>
                <a className="dropdown-item" href="/#"><span className="fa-li pe-2"><i className="fas fa-building" /></span>Companies</a>
              </li>
              <li>
                <a className="dropdown-item" href="/#"><span className="fa-li pe-2"><i className="fas fa-key" /></span>Keywords</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/#"><span className="fa-li pe-2"><i className="fas fa-search-plus" /></span>Advanced
                  search<i className="fas fa-chevron-right ps-2" /></a>
              </li>
            </ul>
            <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
          </div>
          <a href="/#!" className="text-white"><i className="fas fa-search ps-3" /></a>
        </form>
        <ul className="navbar-nav ms-3">
          <li className="nav-item me-3">
            <a className="nav-link d-flex align-items-center" href="/#!">IMDbPro</a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center me-3" href="/#!">
              <i className="fas fa-bookmark pe-2" /> Watchlist
            </a>
          </li>
          <li className="nav-item" style={{width: 65}}>
            <a className="nav-link d-flex align-items-center" href="/#!">Sign In</a>
          </li>
        </ul>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
    </div>
  )
}

