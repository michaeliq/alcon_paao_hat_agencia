import { CustomCarousel } from "../../components/Carousel";
import "../../styles/containers/Home/HeroBanner.css";

export function HeroBanner() {
    return (
        <div className="hero-banner">
            <CustomCarousel>
                <div>
                    <img src="/images/banner_1.png" />
                </div>
                <div>
                    <img src="/images/banner_2.png" />
                </div>
                <div>
                    <img src="/images/banner_3.png" />
                </div>
                <div>
                    <img src="/images/banner_4.png" />
                </div>
            </CustomCarousel>
        </div>
    )
}