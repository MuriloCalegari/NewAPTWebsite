// useSelectedText.ts
import { useState, useEffect } from 'react';
import { useStores } from "@/hooks/useStores";

interface SelectedTextData {
    text: string;
    top: number;
    left: number;
}

function useSelectedText(): SelectedTextData {
    const [selectedTextData, setSelectedTextData] = useState<SelectedTextData>({ text: '', top: 0, left: 0 });
    const { textbookStore } = useStores();
    const { sidebarState } = textbookStore;



    useEffect(() => {
        const handleMouseUp = () => {
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                const centerX = rect.left + rect.width / 2 + scrollLeft;
                const centerY = rect.top + rect.height / 2 + scrollTop - 30;

                setSelectedTextData({ text: selection.toString(), top: centerY, left: centerX });
            } else {
                setSelectedTextData({ text: '', top: 0, left: 0 });
            }
            if (selection && selection.toString() == "" && sidebarState === "ask-ai") {
                textbookStore.setSidebarState("closed")
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
