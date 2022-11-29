import { useState, useEffect } from "react";
import "./style.css";

const Date = () => {
    const [myDate, setMyDate] = useState(new window.Date());

    const formatDate = (date) => date.toLocaleDateString(undefined, {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long",
    });

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setMyDate(myDate => new window.Date())
        }, 1000);

        return () => {
            clearInterval(IntervalId);
        };
    }, []);

    return (
        <p className="date">
            Dzisiaj jest {formatDate(myDate)}
        </p>
    );
};

export default Date;