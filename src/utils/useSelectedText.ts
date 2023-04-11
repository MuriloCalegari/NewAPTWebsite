// useSelectedText.ts
import { useState, useEffect } from 'react';

interface SelectedTextData {
    text: string;
    top: number;
    left: number;
}

function useSelectedText(): SelectedTextData {
    const [selectedTextData, setSelectedTextData] = useState<SelectedTextData>({ text: '', top: 0, left: 0 });

    useEffect(() => {
        const handleMouseUp = () => {
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                const top = rect.top + window.scrollY;
                const left = rect.left + (rect.width / 2) + window.scrollX;
                setSelectedTextData({ text: selection.toString(), top, left });
            } else {
                setSelectedTextData({ text: '', top: 0, left: 0 });
            }
        };

        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return selectedTextData;
}

export default useSelectedText;
