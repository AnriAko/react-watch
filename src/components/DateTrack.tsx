import { JSX, useState } from 'react';

const weekdayArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const monthArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
export function DateTrack(): JSX.Element {
    const [fullDate, setFullDate] = useState('loading');
    const [weekDay, setWeekDay] = useState('loading');

    setInterval(() => {
        const date = new Date();
        const day = date.getDate();
        const month = monthArray[date.getMonth()];
        setWeekDay(weekdayArray[date.getDay()]);
        const year = date.getFullYear();
        setFullDate(`${day}-${month}-${year}`);
    }, 1000);

    return (
        <div>
            <div>Current week day: {weekDay} </div>
            <div>Current full date: {fullDate}</div>
        </div>
    );
}
