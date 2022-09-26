import React from "react";
import PropTypes from 'prop-types';

import styles from "./ticker.module.css";

function ReactTicker(props) {
    const {
        data,
        component,
        keyName,
        speed,
        delay,
        diretion,
        tickerClassName,
        itemClassName,
        tickerTextClassName,
        tickerStyle,
        itemStyle,
    } = props;


    return (
        <div
            className={[styles.newsTicker, tickerClassName].join(" ")}
            style={tickerStyle}
        >
            <div
                className={styles.tickerContent}
                style={{
                    animationDuration: `${data.length * (speed)}s`,
                    animationDelay: `${delay}s`,
                    animationDirection: diretion,
                }}
            >
                {
                    component ?
                        data.map((item, index) => {
                            return (
                                <div
                                    key={keyName ? data[keyName] : index}
                                    className={[styles.tickerItem, itemClassName].join(" ")}
                                    style={itemStyle}
                                >
                                    {component(item, index)}
                                </div>
                            )
                        })
                        :
                        data.map((item) => {
                            return (
                                <div
                                    key={item}
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
    speed: 16,
    delay: 0,
    direction: "normal",
    tickerClassName: "",
    itemClassName: "",
    tickerTextClassName: "",
    tickerStyle: {},
    itemStyle: {},
}

ReactTicker.propTypes = {
    data: PropTypes.array.isRequired,
    component: PropTypes.elementType,
    keyName: PropTypes.string,
    speed: PropTypes.number,
    delay: PropTypes.number,
    direction: PropTypes.oneOf(["normal", "reverse", "alternate", "alternate-reverse"]),
    tickerClassName: PropTypes.string,
    itemClassName: PropTypes.string,
    tickerTextClassName: PropTypes.string,
    tickerStyle: PropTypes.object,
    itemStyle: PropTypes.object,
}


export default ReactTicker;
