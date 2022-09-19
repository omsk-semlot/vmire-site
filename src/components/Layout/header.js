import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo-large.svg"
import menuIcon from "../../images/menu.svg"

class Header extends Component {
  openSidebar() {
    document.getElementById("sidebar").style.display = "block"
  }

  closeSidebar() {
    document.getElementById("sidebar").style.display = "none"
  }
  render() {
    let page = this.props.page
    return this.props.smallScreen ? (
      <div className="sidebar">
        <button onClick={this.openSidebar} className="sidebar-button-off">
          <img src={menuIcon} alt="Menu" className="menu-icon"></img>
        </button>
        <div
          class="sidebar-inner"
          style={{ display: "none" }}
          id="sidebar"
          onClick={this.closeSidebar}
        >
          <button className="sidebar-button-on">
            <img src={menuIcon} alt="Menu" className="menu-icon"></img>
          </button>
          <Link to="/public" className="sidebar-link">
            <button className="sidebar-item">ОБЩЕСТВО</button>
          </Link>
          <Link to="/culture" className="sidebar-link">
            <button className="sidebar-item">КУЛЬТУРА</button>
          </Link>
          <Link to="/sport" className="sidebar-link">
            <button className="sidebar-item">СПОРТ</button>
          </Link>          
          <Link to="/films" className="sidebar-link">
            <button className="sidebar-item">ФИЛЬМЫ</button>
          </Link>
          <Link to="/vital" className="sidebar-link">
            <button className="sidebar-item">ВАЖНОЕ</button>
          </Link>
          <Link to="/contact" className="sidebar-link">
            <button className="sidebar-item">КОНТАКТЫ</button>
          </Link>
        </div>
      </div>
    ) : (
      <header className="header">
        <Link to="/public">
          <button className={page === "public" ? "button-active" : "button"}>
            ОБЩЕСТВО
          </button>
        </Link>
        <Link to="/culture">
          <button className={page === "culture" ? "button-active" : "button"}>
            КУЛЬТУРА
          </button>
        </Link>
        <Link to="/sport">
          <button className={page === "sport" ? "button-active" : "button"}>
            СПОРТ
          </button>
        </Link>
        <Link to="/">
          <img src={logo} alt="Логотип В)МИРЕ" className="logo"></img>
        </Link>
        <Link to="/films">
          <button className={page === "films" ? "button-active" : "button"}>
            ФИЛЬМЫ
          </button>
        </Link>
        <Link to="/vital">
          <button className={page === "vital" ? "button-active" : "button"}>
            ВАЖНОЕ
          </button>
        </Link>
        <Link to="/contact">
          <button className={page === "contact" ? "button-active" : "button"}>
            КОНТАКТЫ
          </button>
        </Link> 
      </header>
    )
  }
}
export default Header
