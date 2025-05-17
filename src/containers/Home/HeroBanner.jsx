import { CustomCarousel } from "../../components/Carousel";
import "../../styles/containers/Home/HeroBanner.css";

export function HeroBanner() {
    return (
        <div className="hero-banner">
            <CustomCarousel>
                <div>
                    <img src="/images/banner_1.png" className="hero_image_1" />
                </div>
                <div>
                    <img src="/images/banner_2.png" className="hero_image_2"/>
                </div>
                <div>
                    <img src="/images/banner_3.png" className="hero_image_3"/>
                </div>
                <div>
                    <img src="/images/banner_4.png" className="hero_image_4"/>
                </div>
            </CustomCarousel>
        </div>
    )
}