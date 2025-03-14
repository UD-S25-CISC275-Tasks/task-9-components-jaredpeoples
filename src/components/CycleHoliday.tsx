import React, { useState } from "react";
import { Button } from "react-bootstrap";

export enum Holiday {
    Christmas = "🎄",
    Easter = "🐰",
    Halloween = "🎃",
    StPatricksDay = "☘️",
    BoxingDay = "📦"
}

export const HolidayDates: Record<Holiday, Holiday> = {
    [Holiday.StPatricksDay]: Holiday.Easter,
    [Holiday.Easter]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.Christmas,
    [Holiday.Christmas]: Holiday.BoxingDay,
    [Holiday.BoxingDay]: Holiday.StPatricksDay
};

export const HolidayNames: Record<Holiday, Holiday> = {
    [Holiday.BoxingDay]: Holiday.Christmas,
    [Holiday.Christmas]: Holiday.Easter,
    [Holiday.Easter]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.StPatricksDay,
    [Holiday.StPatricksDay]: Holiday.BoxingDay
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(Holiday.Christmas);

    function advanceName() {
        setHoliday(HolidayNames[holiday]);
    }

    function advanceYear() {
        setHoliday(HolidayDates[holiday]);
    }

    return (
        <div>
            <div>
                <Button onClick={advanceName}>Advance by Alphabet</Button>
                <Button onClick={advanceYear}>Advance by Year</Button>
            </div>
            <p>Holiday: {holiday}</p>
        </div>
    );
}
