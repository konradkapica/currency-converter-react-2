import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
    const [myDate, setMyDate] = useState(new Date());

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
            setMyDate(myDate => new Date())
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

export default Clock;