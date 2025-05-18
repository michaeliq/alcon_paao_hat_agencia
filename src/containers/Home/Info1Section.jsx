import "../../styles/containers/Home/Info1Section.css";

export function Info1Section() {
    return (
        <div className="info_1_container">
            <h2 className="title_info_1">
                Visite los espacios que tendremos en <br /><span>el 3er y 5to piso del congreso</span>
            </h2>
            <div className="cta_info_1 mobile">
                Contaremos con la participación de destacados <span>speakers internacionales y nacionales</span>
            </div>
            <div className="image_container_info_1">
                <div className="people_image_info_1">
                    <div className="imagen_content_info_1">
                        <img src="/images/dr_ivo_ferreira.webp" alt="Info 1" className="image_1_5_info_1" />
                        <p className="legend_image_info_1">
                            Speaker Internacional <br /> <span>Dr. Ivo Ferreira</span>
                        </p>
                    </div>
                    <div className="imagen_content_info_1">
                        <img src="/images/dr_ivan_ossma.webp" alt="Info 1" className="image_1_info_1" />
                        <p className="legend_image_info_1">
                            Speaker Nacional <br /> <span>Dr. Ivan Ossma</span>
                        </p>
                    </div>
                    <div className="imagen_content_info_1">
                        <img src="/images/dra_ximena_nunez.webp" alt="Info 1" className="image_1_5_info_1" />
                        <p className="legend_image_info_1">
                            Speaker Nacional <br /> <span>Dr. Ximena Nuñez</span>
                        </p>
                    </div>
                </div>
                <div className="cta_info_1 desktop">
                    Contaremos con la participación de destacados <span>speakers internacionales y nacionales</span>
                </div>
                <div className="dr_image_info_1">
                    <img src="/images/woman-dr.webp" alt="Info 2" className="image_2_info_1" />
                    <div className="copy_container_info_1">
                        <h3 className="subtitle_info_1">
                            <span>Planificación<br /> </span>quirúrgica sin errores
                        </h3>
                        <p className="data_info_1">
                            Conoce una innovadora solución que permite enviar planes quirúrgicos directamente al sistema de navegación, eliminando errores de transcripción y facilitando una ejecución precisa y guiada por imágenes.
                        </p>
                        <div className="btn_logo_container_copy_info_1">
                            <button className="btn_info_1">
                                Registro
                            </button>
                            <div className="cvent_image_info_1">
                                <img src="/images/cvent_logo.webp" alt="Cvent" className="cvent_image" />
                            </div>
                        </div>
                    </div>
                    <img src="/images/circles.webp" alt="Info 3" className="image_3_info_1" />
                </div>
            </div>
            <div className="copy_container_info_1">
                <h3 className="subtitle_info_1">
                    <span>Planificación<br /> </span>quirúrgica sin errores
                </h3>
                <p className="data_info_1">
                    Conoce una innovadora solución que permite enviar planes quirúrgicos directamente al sistema de navegación, eliminando errores de transcripción y facilitando una ejecución precisa y guiada por imágenes.
                </p>
                <button className="btn_info_1">
                    Registro
                </button>
                <div className="cvent_image_info_1">
                    <img src="/images/cvent_logo.webp" alt="Cvent" className="cvent_image" />
                </div>
            </div>
        </div>
    )
}