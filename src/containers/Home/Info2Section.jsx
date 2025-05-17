import "../../styles/containers/Home/Info2Section.css";

export function Info2Section() {

    return (
        <div className="info_2_container">
            <img src="/images/line_sec_1.webp" alt="Info 2" className="decoration_info_2" />
            <div className="content_info_2">
                <img src="/images/image_info_2.png" alt="Info 2" className="image_2_info_2" />
                <div className="data_section_info_2">
                    <h2 className="title_info_2">
                        Medir, Personalizar y Entregar
                    </h2>
                        <p className="data_info_2">
                            Solución avanzada permite personalizar el perfil de ablación de cada paciente con un nivel de precisión comparable a la alta costura: utilizando datos biométricos, tomografía y frente de onda para planificar tratamientos únicos con resultados visuales excepcionales.
                        </p>
                    <div className="btn_logo_container_copy_info_2">
                        <button className="btn_info_2">
                            Registro
                        </button>
                        <div className="cvent_image_info_2">
                            <img src="/images/cvent_logo.webp" alt="Cvent" className="cvent_image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}