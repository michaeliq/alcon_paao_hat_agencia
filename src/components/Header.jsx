import "../styles/components/Header.css";
import { useState } from "react";
export function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header" id="header">
            <a href="/">
                <img src="/images/logo_alcon.webp" alt="Logo Alcon" className="logo-header" />
            </a>
            <img className="btn-hamburguer-header" onClick={toggleMenu} src="/images/icono-menu-hamburguesa.webp" alt="menu hamburguesa" />
            <nav className={`nav-header ${menuOpen ? "open" : ""}`}>
                <div className="btn-close-header" onClick={toggleMenu}>X</div>
                <ul className="list-nav-header">
                    <img className="logo-header" src="/images/logo_alcon.webp" alt="logo alcon" />
                    <li onClick={toggleMenu} className="item-list-nav-header"><a href="#stand_section">Nuestro Stand</a></li>
                    <li onClick={toggleMenu} className="item-list-nav-header"><a href="#map_section">Cómo llegar</a></li>
                </ul>
                <h2 className="bran_header_footer">PAAO 2025</h2>
            </nav>
        </header>
    );
}