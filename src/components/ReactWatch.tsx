import { JSX, useState } from 'react';
import { DateTrack } from './DateTrack';
import { TimeTrack } from './TimeTrack';

export function ReactWatch(): JSX.Element {
    return (
        <div>
            <DateTrack />
            <TimeTrack />
        </div>
    );
}
