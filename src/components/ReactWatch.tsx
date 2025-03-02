import { JSX, useState } from 'react';
import { DateTrack } from './DateTrack';
import { TimeTrack } from './TimeTrack';
import getFormattedDate from '../utils/getFormattedDate';

export function ReactWatch(): JSX.Element {
    const [formattedDate, setFormattedDate] = useState(getFormattedDate());
    return (
        <div>
            <DateTrack formattedDate={formattedDate} />
            <TimeTrack setFormattedDate={setFormattedDate} />
        </div>
    );
}
