import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled"

const formatDate = (date) => date.toLocaleDateString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
});

const Clock = () => {
    const [myDate] = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest {formatDate(myDate)}
        </StyledClock>
    );
};

export default Clock;