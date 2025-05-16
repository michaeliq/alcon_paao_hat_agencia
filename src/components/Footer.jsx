import "../styles/components/Footer.css";

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="container-logo-links">
                    <div className="container-logo-brand">
                        <img src="/images/logo_alcon.webp" alt="Logo Alcon" className="logo-footer" />
                        <div className="brand_footer">
                            <h2>
                                PAAO 2025
                            <div className="underline"></div>
                            </h2>
                            <p>Pan-American Association of Ophthalomolgy</p>
                        </div>
                    </div>
                    <div className="container-links">
                        <ul className="list-links-footer">
                            <li className="items-list-footer"><a href="#stand_section">Nuestro Stand</a></li>
                            <li className="items-list-footer"><a href="#map_section">Cómo llegar</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    Material elaborado y distribuido por Laboratorios Alcon de Colombia S.A <br/>CO-SG-2500019
                </div>
            </div>
        </div>
    )
}