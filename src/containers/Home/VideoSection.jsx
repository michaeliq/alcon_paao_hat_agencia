import "../../styles/containers/Home/VideoSection.css"

export function VideoSection() {
    return (
        <div className="container_video">
            <img src="/images/line_sec_1.webp" alt="decoración" className="line_sec_1_video" />
            <h2 className="title_video">
                video
            </h2>
            <video src="https://youtu.be/ViotnARQIw4?si=b-DmAzsopQ9UQIlR" className="media_video">
                Tu navegador no admite el elemento <code>video</code>.
            </video>
        </div>
    )
}