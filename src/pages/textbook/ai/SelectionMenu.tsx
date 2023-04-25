// SelectionMenu.tsx
import React from 'react';
import { observer } from "mobx-react-lite";
import { useStores } from "@/hooks/useStores";
import { Icon } from '@rsuite/icons';
import { AiOutlineHighlight, AiOutlineRobot } from "react-icons/ai"
import { BsChatDots } from "react-icons/bs"

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
        display: 'inline-block',
    };

    return (
        <div style={style} className="triangle">
            <button className="selection-button" onClick={() => { onHighlight }}><Icon as={AiOutlineHighlight} /></button>
            <button className="selection-button" onClick={() => { textbookStore.setSidebarState('ask-ai') }}><Icon as={AiOutlineRobot} /></button>
            <button className="selection-button" onClick={() => { textbookStore.setSidebarState('chat') }}><Icon as={BsChatDots} /></button>
        </div>
    );
});

export default SelectionMenu;
