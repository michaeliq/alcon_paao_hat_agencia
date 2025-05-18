import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { useWindowDimensions } from "../helpers/getWindowDimensions";

export function CustomCarousel(props) {

    const [showArrows,setStateArrows] = useState(false);

    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width < 800) {
            setStateArrows(false);
        } else {
            setStateArrows(true);
        }
    })

    return (
        <Carousel
            infiniteLoop={true}
            labels={false}
            showIndicators={showArrows}
            showArrows={showArrows}
            showStatus={false}
            showThumbs={false}
        >
            {props.children}
        </Carousel>
    )
}