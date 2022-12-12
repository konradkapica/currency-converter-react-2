import { useCurrentDate } from "./useCurrentDate";
import "./style.css";

const Clock = () => {
    const [myDate, formatDate] = useCurrentDate();

    return (
        <p className="date">
            Dzisiaj jest {formatDate(myDate)}
        </p>
    );
};

export default Clock;