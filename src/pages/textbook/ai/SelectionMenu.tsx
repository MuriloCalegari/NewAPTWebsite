// SelectionMenu.tsx
import React from 'react';
import { observer } from "mobx-react-lite";
import { useStores } from "@/hooks/useStores";


interface SelectionMenuProps {
    top: number;
    left: number;
    onHighlight: (arg1: number, arg2: number, arg3: string) => void;
}

export const SelectionMenu = observer(({ top, left, onHighlight }: SelectionMenuProps) => {
    const { textbookStore } = useStores();

    const style: React.CSSProperties = {
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        backgroundColor: 'white',
        transform: 'translate(-50%, -50%)',
        padding: '5px',
        borderRadius: '3px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={style}>
            <button className="selection-button" onClick={() => { onHighlight }}>Annotate</button>
            <button className="selection-button" onClick={() => { textbookStore.setSidebarState('ask-ai') }}>Ask AI</button>
        </div>
    );
});

export default SelectionMenu;
