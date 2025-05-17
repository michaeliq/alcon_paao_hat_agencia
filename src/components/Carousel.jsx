import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { use, useEffect, useState } from 'react';

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[])

    return windowDimensions;
}

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