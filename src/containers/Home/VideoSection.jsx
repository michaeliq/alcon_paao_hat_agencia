import "../../styles/containers/Home/VideoSection.css"

export function VideoSection() {
    return (
        <div className="container_video">
            <h2 className="title_video">
                video
            </h2>
            <video controls="controls" className="media_video">
                <source src="/videos/Elevate_Alcon_short_version_subtitulos.mp4" type="video/mp4" />
                Tu navegador no admite el elemento <code>video</code>.
            </video>
        </div>
    )
}