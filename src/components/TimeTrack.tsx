import { Dispatch, JSX, SetStateAction, useEffect, useState } from 'react';
import getFormattedDate from '../utils/getFormattedDate';

interface TimeTrackProps {
    setFormattedDate: Dispatch<SetStateAction<(string | number)[]>>;
}

export function TimeTrack({ setFormattedDate }: TimeTrackProps): JSX.Element {
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newTime = getCurrentTime();
            setTime(newTime);

            const now = new Date();
            if (
                now.getSeconds() === 0 &&
                now.getMinutes() === 0 &&
                now.getHours() === 0
            ) {
                setFormattedDate(getFormattedDate());
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div>Current time: {time} </div>
        </div>
    );
}

function getCurrentTime(): string {
    const date = new Date();
    return [
        date.getHours().toString().padStart(2, '0'),
        date.getMinutes().toString().padStart(2, '0'),
        date.getSeconds().toString().padStart(2, '0'),
    ].join(':');
}
