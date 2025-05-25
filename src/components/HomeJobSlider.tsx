'use client';

import { useState } from 'react';
import SlidingRow, {createRows, RowProps} from "@/components/SidingRow";

export default function HomeCompanySlider({ items, rowCount }: RowProps) {
    const [rows] = useState(() => createRows(rowCount, items));
    const speeds = [38, 40];

    return (
        <div className="space-y-4">
            {rows.map((row, rowIndex) => (
                <SlidingRow
                    key={rowIndex}
                    items={row}
                    speed={speeds[rowIndex]}
                    rowIndex={rowIndex}
                />
            ))}
        </div>
    );
}