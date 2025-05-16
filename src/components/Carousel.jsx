import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function CustomCarousel(props) {


    return (
        <Carousel
            infiniteLoop={true}
            labels={false}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
        >
            {props.children}
        </Carousel>
    )
}