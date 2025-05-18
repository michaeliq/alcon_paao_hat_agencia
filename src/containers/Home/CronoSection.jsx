import "../../styles/containers/Home/CronoSection.css";
import { useEffect, useState } from "react";
export function CronoSection() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const countdownDate = new Date("2025-05-30T00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

            if (distance < 0) {
                clearInterval(interval);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }

        }, 1000);


        return () => clearInterval(interval);
    })

    return (
        <div className="crono_container">
            <h2 className="title_crono">
                <span>muy</span> pronto
            </h2>
            <div className="content_crono">

                <div className="item_container_crono">
                    <div className="item_crono">
                        <span>{days}</span>
                    </div>
                    <p className="caption">dias</p>
                </div>
                <div className="item_container_crono">
                    <div className="item_crono">
                        <span>{hours}</span>
                    </div>
                    <p className="caption">horas</p>
                </div>
                <div className="item_container_crono">
                    <div className="item_crono">
                        <span>{minutes}</span>
                    </div>
                    <p className="caption">minutos</p>
                </div>
                <div className="item_container_crono">
                    <div className="item_crono">
                        <span>{seconds}</span>
                    </div>
                    <p className="caption">segundos</p>
                </div>

            </div>
        </div>
    )
}