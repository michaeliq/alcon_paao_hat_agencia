import "../../styles/containers/Home/MaPSection.css"

export function MapSection() {
    return (
        <div className="map_container" id="map_section">
            <div className="header_map">
                <img src="/images/line_sec_2.webp" alt="decoration" className="line_sec_2_map" />
                <h2 className="title_map">
                    cómo llegar
                </h2>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8012005936816!2d-74.09566648861897!3d4.629527495325812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd91908ed1d%3A0x23880f62017a68ac!2zw4Fnb3JhIEJvZ290w6E!5e0!3m2!1ses!2sco!4v1747360748275!5m2!1ses!2sco"allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="data_map"></iframe>
        </div>
    )
}