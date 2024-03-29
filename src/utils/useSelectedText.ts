// useSelectedText.ts
import { useState, useEffect } from 'react';
import { useStores } from "@/hooks/useStores";

interface SelectedTextData {
    text: string;
    top: number;
    left: number;
    className: string;
}

function useSelectedText(): SelectedTextData {
    const [selectedTextData, setSelectedTextData] = useState<SelectedTextData>({ text: '', top: 0, left: 0, className: '' });
    const { textbookStore } = useStores();
    const { sidebarState } = textbookStore;
    const allowedClassNames = ["code-text-panel", "rs-panel-body", "textbook-content", "textbook-card", "textbook-page-container", "rs-content"];

    useEffect(() => {
        const handleMouseUp = () => {
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const className = selection.anchorNode?.parentElement?.parentElement?.parentElement?.classList[0];
                if (allowedClassNames.includes(className || '')) {
                    const rect = range.getBoundingClientRect();
                    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                    const centerX = rect.left + rect.width / 2 + scrollLeft;
                    const centerY = rect.top + rect.height / 2 + scrollTop - 60;

                    setSelectedTextData({ text: selection.toString(), top: centerY, left: centerX, className: className || '' });
                }
            } else {
                setSelectedTextData({ text: '', top: 0, left: 0, className: '' });
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
