import "../../styles/containers/Home/Info3Section.css"

export function Info3Section() {
    return (
        <div className="info_3_container">
            <div className="content_info_3">
                <div className="content_image_info_3">
                    <img src="/images/image_info_3.webp" alt="info 3 image" className="image_info_3" />
                    <img src="/images/copy_info_3.png" alt="info 3 image" className="image_info_3" />
                </div>
                <div className="data_section_info_3">
                    <img src="/images/image_3_info3.png" alt="info 3 image" className="image_desktop_info_3" />
                    <p className="data_info_3">
                        Encuentra una solución que respalda decisiones clínicas con evidencia sólida, alineada con las recomendaciones más exigentes en el manejo del glaucoma, para ofrecer resultados predecibles y de alto impacto.
                    </p>
                    <div className="btn_logo_container_copy_info_2">
                        <button className="btn_info_3" onClick={()=>{
                    window.open('https://cvent.me/3MvEDK', '_blank');
                }}>
                            Registro
                        </button>
                        <div className="cvent_image_info_3">
                            <img src="/images/cvent_logo.webp" alt="Cvent" className="cvent_image" />
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}