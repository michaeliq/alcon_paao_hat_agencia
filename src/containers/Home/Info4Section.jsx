import "../../styles/containers/Home/Info4Section.css";

export function Info4Section() {

    return (
        <div className="info_4_container">
            <img src="/images/line_sec_1.webp" alt="Info 2" className="decoration_info_4" />
            <div className="content_info_4">
                <img src="/images/image_info_4.png" alt="Info 2" className="image_2_info_4" />
                <div className="data_section_info_4">
                    <h2 className="title_info_4">
                        Nueva Generación de IOLs
                    </h2>
                        <p className="data_info_4">
                            Nuestros lentes ofrecen los últimos avances en materiales con más de 20 años de innovación continua de LIO.
                        </p>
                    <div className="btn_logo_container_copy_info_4">
                        <button className="btn_info_4">
                            Registro
                        </button>
                        <div className="cvent_image_info_4">
                            <img src="/images/cvent_logo.webp" alt="Cvent" className="cvent_image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}