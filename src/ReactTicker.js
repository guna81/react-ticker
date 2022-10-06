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
        loop,
    } = props;


    return (
        <div
            className={[styles.newsTicker, tickerClassName].join(" ")}
            style={tickerStyle}
        >
            <div
                className={styles.tickerContent}
                style={{
                    animationDuration: `${data.length * (61 - speed)}s`,
                    animationDelay: `${delay}s`,
                    animationDirection: diretion,
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
    speed: 24,
    delay: 0,
    direction: "normal",
    tickerClassName: "",
    itemClassName: "",
    tickerTextClassName: "",
    tickerStyle: {},
    itemStyle: {},
    loop: true,
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
    loop: PropTypes.bool,
}


export default ReactTicker;
