import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled"

const Clock = () => {
    const [myDate, formatDate] = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest {formatDate(myDate)}
        </StyledClock>
    );
};

export default Clock;