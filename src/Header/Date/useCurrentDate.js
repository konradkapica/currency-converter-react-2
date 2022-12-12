import { useState, useEffect } from "react";

export const useCurrentDate = () => {
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

    return [myDate, formatDate];
};