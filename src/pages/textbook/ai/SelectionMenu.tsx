// SelectionMenu.tsx
import React from 'react';

interface SelectionMenuProps {
    top: number;
    left: number;
    onHighlight: (arg1: number, arg2: number, arg3: string) => void;
}

const SelectionMenu: React.FC<SelectionMenuProps> = ({ top, left, onHighlight }) => {
    const style: React.CSSProperties = {
        position: 'absolute',
        top: `${top - 35}px`,
        left: `${left - 70}px`,
        backgroundColor: 'white',
        padding: '5px',
        borderRadius: '3px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={style}>
            <button>Annotate</button>
            <button onClick={() => { onHighlight }}>Ask AI</button>
        </div>
    );
};

export default SelectionMenu;
