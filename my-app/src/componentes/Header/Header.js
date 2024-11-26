import React from "react";
import "./Header.css";
import logo from "../../assets/logo.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="Carioca Logo" />
        </div>
        <div className="contacts">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <span>21.9 9995-6202 </span>
          <span>21.9 9995-3526</span>
        </div>

        <nav className="nav">
          <a href="#simulador" className="nav-item active">
            Simulador
          </a>
          <a href="#produtos" className="nav-item">
            Nossos Produtos
          </a>
          <a href="#passo-a-passo" className="nav-item">
            Passo a Passo
          </a>
          <a href="#portfolio" className="nav-item">
            Portfólio
          </a>
          <a href="#contato" className="nav-item">
            Contato
          </a>
        </nav>
      </div>

    </header>
  );
};

export default Header;
