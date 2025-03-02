import { JSX, useEffect, useState } from 'react';
import getFormattedDate from '../utils/getFormattedDate';

interface DateTrackProps {
    formattedDate: (string | number)[];
}

export function DateTrack({ formattedDate }: DateTrackProps): JSX.Element {
    const [currentDay, currentWeekDay, currentMonth, CurrentYear] =
        getFormattedDate();

    const [fullDate, setFullDate] = useState(
        `${currentDay}-${currentMonth}-${CurrentYear}`
    );
    const [weekDay, setWeekDay] = useState(currentWeekDay);
    useEffect(() => {
        setFullDate(`${currentDay}-${currentMonth}-${CurrentYear}`);
        setWeekDay(currentWeekDay);
    }, [formattedDate]);

    return (
        <div>
            <div>Current week day: {weekDay} </div>
            <div>Current full date: {fullDate}</div>
        </div>
    );
}
