import './menu.css';
import React, {Component} from "react";


class Menu extends React.Component {

    showMenu = () =>{
      document.getElementById('nav_menu').classList.add('show-menu');
    }

    closeMenu = () =>{
      document.getElementById('nav_menu').classList.remove('show-menu');
    }

    render() {
      return <header className="header" id="header">
                <nav className="nav container">
                  <a href="#" className="nav_logo">Miguel</a>
                  <div className="nav_menu" id="nav_menu">
                    <ul className="nav_list grid">
                        <li className="nav_item">
                          <a onClick={this.closeMenu} href="#home" className="nav_link" id="nav_link">
                            <i className="fas fa-home nav_icon"></i> Home
                          </a>
                        </li>
                        <li className="nav_item">
                          <a onClick={this.closeMenu} href="#about" className="nav_link" id="nav_link">
                            <i className="fas fa-user nav_icon"></i> About
                          </a>
                        </li>
                        <li className="nav_item">
                          <a onClick={this.closeMenu} href="#skills" className="nav_link" id="nav_link">
                            <i className="far fa-file-code nav_icon"></i> Skills
                          </a>
                        </li>
                        <li className="nav_tem">
                          <a onClick={this.closeMenu} href="#project" className="nav_link" id="nav_link">
                            <i className="far fa-image nav_icon"></i> Projects
                          </a>
                        </li>
                        <li className="nav_item">
                          <a onClick={this.closeMenu} href="#contactme" className="nav_link" id="nav_link">
                            <i className="far fa-paper-plane nav_icon"></i> Contactme
                          </a>
                        </li>
                    </ul>
                    <i onClick={this.closeMenu} className="fas fa-times nav_close" id="nav_close"></i>
                  </div>

                  <div  className='nav_btns'>
                      <div onClick={this.showMenu} className='nav_toggle' id="nav-toggle">
                        <i className="fas fa-bars"></i>
                      </div>
                  </div>

                </nav>
            </header>;
    }
  }


  export{Menu};
