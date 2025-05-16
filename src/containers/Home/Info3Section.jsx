import "../../styles/containers/Home/Info3Section.css"

export function Info3Section() {
    return (
        <div className="info_3_container">
            <img src="/images/image_info_3.webp" alt="info 3 image" className="image_info_3" />
            <h2 className="title_info_3">
                Un gran resultado es aquel <span>que perdura</span>
            </h2>
            <p className="data_info_3">
                Encuentra una solución que respalda decisiones clínicas con evidencia sólida, alineada con las recomendaciones más exigentes en el manejo del glaucoma, para ofrecer resultados predecibles y de alto impacto.
            </p>
            <button className="btn_info_3">
                Registro
            </button>
            <div className="cvent_image_info_3">
                <img src="/images/cvent_logo.webp" alt="Cvent" className="cvent_image" />
            </div>
        </div>

    )
}