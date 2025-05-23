import "../../styles/containers/Home/Info1Section.css";

export function Info1Section() {
    return (
        <div className="info_1_container">
            <h2 className="title_info_1">
                Visite los espacios que tendremos en <br /><span>el 3er y 5to piso del congreso</span>
            </h2>

            <div className="image_container_info_1">
                <div className="people_image_info_1">
                    <div className="imagen_content_info_1">
                        <img src="/images/dr_ivo_ferreira.webp" alt="Dr. Ivo Ferreira" className="image_1_5_info_1" />
                        <p className="legend_image_info_1">
                            Speaker Internacional <br /> <span>Dr. Ivo Ferreira</span>
                        </p>
                    </div>
                    <div className="imagen_content_info_1">
                        <img src="/images/dr_ivan_ossma.webp" alt="Dr. Ivan Ossma" className="image_1_info_1" />
                        <p className="legend_image_info_1">
                            Speaker Nacional <br /> <span>Dr. Ivan Ossma</span>
                        </p>
                    </div>
                    <div className="imagen_content_info_1">
                        <img src="/images/dra_ximena_nunez.webp" alt="Dra. Ximena Nuñez" className="image_1_5_info_1" />
                        <p className="legend_image_info_1">
                            Speaker Nacional <br /> <span>Dra. Ximena Nuñez</span>
                        </p>
                    </div>
                    <div className="imagen_content_info_1">
                        <img src="/images/dr_alberto_haber.webp" alt="Dr. Alberto Haber" className="image_1_5_info_1" />
                        <p className="legend_image_info_1">
                            Speaker Internacional <br /> <span>Dr. Alberto Haber</span>
                        </p>
                    </div>
                </div>
                <div className="cta_info_1 mobile">
                    Contaremos con la participación de destacados <span>speakers internacionales y nacionales</span>
                </div>
                <div className="cta_info_1 desktop">
                    Contaremos con la participación de destacados <span>speakers internacionales y nacionales</span>
                </div>
                <div className="dr_image_info_1">
                    <img src="/images/woman-dr.webp" alt="Info 2" className="image_2_info_1" />
                    <div className="copy_container_info_1">
                        <h3 className="subtitle_info_1">
                            <span>Alcon Vision Suite</span>
                        </h3>
                        <p className="data_info_1">
                            Representa el ecosistema integrado de Alcon diseñado para potenciar la práctica del cirujano oftalmólogo al reunir la suite de quirófano más completa de la industria con diagnósticos clínicos, soluciones digitales, además de capacitación y servicios de primera clase.
                        </p>
                        <div className="btn_logo_container_copy_info_1">
                            <button className="btn_info_1" onClick={() => {
                                window.open('https://cvent.me/RXdK97', '_blank');
                            }}>
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
                    <span>Alcon Vision Suite</span>
                </h3>
                <p className="data_info_1">
                    Representa el ecosistema integrado de Alcon diseñado para potenciar la práctica del cirujano oftalmólogo al reunir la suite de quirófano más completa de la industria con diagnósticos clínicos, soluciones digitales, además de capacitación y servicios de primera clase.
                </p>
                <button className="btn_info_1" onClick={() => {
                    window.open('https://cvent.me/RXdK97', '_blank');
                }}>
                    Registro
                </button>
                <div className="cvent_image_info_1">
                    <img src="/images/cvent_logo.webp" alt="Cvent" className="cvent_image" />
                </div>
            </div>
        </div>
    )
}