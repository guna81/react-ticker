import React from "react";

import styles from "./ticker.module.css";

interface ReactTickerProps {
    data: any[]; // Changed from PropTypes.array.isRequired
    component?: React.ElementType; // Changed from PropTypes.elementType
    keyName?: string; // Changed from PropTypes.string
    speed?: number; // Changed from PropTypes.number
    delay?: number; // Changed from PropTypes.number
    direction?: "normal" | "reverse" | "alternate" | "alternate-reverse"; // Changed from PropTypes.oneOf
    tickerClassName?: string; // Changed from PropTypes.string
    itemClassName?: string; // Changed from PropTypes.string
    tickerTextClassName?: string; // Changed from PropTypes.string
    tickerStyle?: React.CSSProperties; // Changed from PropTypes.object
    itemStyle?: React.CSSProperties; // Changed from PropTypes.object
    loop?: boolean; // Changed from PropTypes.bool
}

const ReactTicker: React.FC<ReactTickerProps> = (props) => {
    const {
        data = [],
        component,
        keyName,
        speed = 30,
        delay = 0,
        direction = "normal",
        tickerClassName = "",
        itemClassName = "",
        tickerTextClassName = "",
        tickerStyle = {},
        itemStyle = {},
        loop = true,
    } = props;

    // Note: 'diretion' prop was used in the original code, but 'direction' is defined in propTypes/interface.
    // Assuming 'direction' is the correct prop name. If 'diretion' was intentional, the interface and destructuring need to be updated.
    const animationDirection = direction;


    return (
        <div
            className={[styles.newsTicker, tickerClassName].join(" ")}
            style={tickerStyle}
        >
            <div
                className={styles.tickerContent}
                style={{
                    animationDuration: `${data.length * (61 - (speed || 30))}s`, // Added fallback for speed
                    animationDelay: `${delay}s`,
                    animationDirection: animationDirection, // Use the corrected variable
                    animationIterationCount: loop ? "infinite" : 1,
                }}
            >
                {
                    component ?
                        data.map((item, index) => {
                            return (
                                <div
                                    key={keyName ? item[keyName] : index}
                                    className={[styles.tickerItem, itemClassName].join(" ")}
                                    style={itemStyle}
                                >
                                    {component(item, index)}
                                </div>
                            )
                        })
                        :
                        data.map((item, index) => {
                            return (
                                <div
                                    key={'ticker-item-' + index}
                                    style={itemStyle}
                                    className={[styles.tickerItem, itemClassName].join(" ")}
                                >
                                    <div className={[styles.tickerText, tickerTextClassName].join(" ")}>{item}</div>
                                </div>
                            );
                        })
                }
            </div>
        </div>
    );
}

ReactTicker.defaultProps = {
    data: [],
    component: null,
    keyName: null,
    speed: 30,
    delay: 0,
    direction: "normal",
    tickerClassName: "",
    itemClassName: "",
    tickerTextClassName: "",
    tickerStyle: {},
    itemStyle: {},
    loop: true,
};


export default ReactTicker;
