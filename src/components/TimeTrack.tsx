import { JSX, useState } from 'react';

export function TimeTrack(): JSX.Element {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const currentTime = `${hours}:${minutes}:${seconds}`;
    const [time, setTime] = useState(currentTime);

    setInterval(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return (
        <div>
            <div>Current time: {time} </div>
        </div>
    );
}
