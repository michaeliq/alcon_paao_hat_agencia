import { CustomCarousel } from "../../components/Carousel";
import "../../styles/containers/Home/HeroBanner.css";
import { useWindowDimensions } from "../../helpers/getWindowDimensions";
import { useState, useEffect } from "react";

export function HeroBanner() {
    const [images, setImages] = useState([false]);
    let array_image = [
        {
            image: "/images/banner_1.png",
            class: "hero_image_1"
        },
        {
            image: "/images/banner_2.webp",
            class: "hero_image_2"
        },
        {
            image: "/images/banner_3.webp",
            class: "hero_image_3"
        },
        {
            image: "/images/banner_4.png",
            class: "hero_image_4"
        },
        {
            image: "/images/banner_5.webp",
            class: "hero_image_5"
        },
    ]

    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width < 800) {
            setImages(array_image)
        } else {
            if (array_image[array_image.length - 1]?.class == "hero_image_5"){
                array_image.pop()
                setImages(array_image)
            }
        }
    },[width])
    return (
        <div className="hero-banner">
            <CustomCarousel>
                {images.map((data, i) => (
                    <div key={i+data.class}>
                        <img src={data.image} className={data.class} />
                    </div>
                ))}
            </CustomCarousel>
        </div>
    )
}