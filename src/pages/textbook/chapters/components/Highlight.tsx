import React, {ReactElement} from "react";
import {observer} from "mobx-react-lite";
import {Whisper} from "rsuite";

export interface HighlightProps extends React.HTMLAttributes<HTMLElement>{
    children : ReactElement;
}

const Overlay = React.forwardRef(({ style, onClose, ...rest }, ref) => {
    const styles = {
        ...style,
        color: '#000',
        background: '#fff',
        width: 200,
        padding: 10,
        borderRadius: 4,
        position: 'absolute',
        border: '1px solid #ddd',
        boxShadow: '0 3px 6px -2px rgba(0, 0, 0, 0.6)'
    };

    return (
        <div {...rest} style={styles} ref={ref}>
            Overlay
            <hr />
            <button onClick={onClose}>close</button>
        </div>
    );
});

export const Highlight = observer((props : HighlightProps) => {

    const {
        children,
        ...rest
    } = props;

    const [active, setActive] = React.useState(true);

    if(active) {
        return (
            <Whisper
                trigger={"click"}
                speaker={(props, ref) => {
                    const { className, left, top, onClose } = props;
                    return <Overlay style={{ left, top }} onClose={onClose} className={className} ref={ref} />;
                }}
                placement={"top"}
            >
                <mark className={"mark-textbook"} {...rest}>
                    {props.children}
                </mark>
            </Whisper>
        );
    } else {
        return props.children;
    }
});