import React, {ReactElement} from "react";
import {observer} from "mobx-react-lite";
import {Button, Divider, Panel, Stack, Whisper} from "rsuite";
import classNames from "classnames";

export interface HighlightProps extends React.HTMLAttributes<HTMLElement>{
    children : ReactElement;
}

const Overlay = React.forwardRef(({ style, onClose, className, ...rest }, ref) => {
    const styles = {
        ...style,
        // color: '#000',
        background: '#fff',
        // width: 200,
        // padding: 10,
        // borderRadius: 4,
        position: 'absolute',
        // border: '1px solid #ddd',
        // boxShadow: '0 3px 6px -2px rgba(0, 0, 0, 0.6)'
        // padding: "0 0 0 0"
        top: style.top + 15
    };

    const finalClassName = classNames(className, "highlight-overlay");

    return (
        <Panel {...rest} className={finalClassName} style={styles} ref={ref} shaded>
            <Stack>
                <Button appearance={"subtle"}>Thread</Button>
                <Divider style={{marginLeft: 0, marginRight: 0}} vertical/>
                <Button appearance={"subtle"}>Ask AI</Button>
                <Divider style={{marginLeft: 0, marginRight: 0}} vertical/>
                <Button appearance={"subtle"}>Unhighlight</Button>
            </Stack>
        </Panel>
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