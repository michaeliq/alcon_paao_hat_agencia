import "../../styles/containers/Home/StandSection.css"
import { CustomCarousel } from "../../components/Carousel";


export function StandSection(){
    return(
        <div className="stand_container" id="stand_section">
            <div className="header_stand">
                <img src="/images/line_sec_2.webp" alt="decoration" className="line_sec_2_stand" />
                <h2 className="title_stand">
                    nuestro stand
                </h2>
            </div>
            <CustomCarousel>
                <div>
                    <img src="/images/image_stand_1.png" />
                </div>
                <div>
                    <img src="/images/image_stand_2.png" />
                </div>
                <div>
                    <img src="/images/image_stand_3.png" />
                </div>
            </CustomCarousel>
        </div>
    )
}