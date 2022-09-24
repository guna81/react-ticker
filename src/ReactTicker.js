import React from "react";
import styles from "./ticker.module.css";

function ReactTicker(props) {
    const {
        data,
        delay,
        tickerClassName,
        itemClassName,
        tickerTextClassName
    } = props;

    return (
        <div className={[styles.newsTicker, tickerClassName].join(" ")}>
            <div
                className={styles.tickerContent}
                style={{
                    animationDuration: `${data.length * 16}s`,
                    animationDelay: `${delay}s`,
                }}
            >
                {data.map((item) => {
                    return (
                        <div key={item} className={[styles.tickerItem, itemClassName].join(" ")}>
                            <div className={[styles.tickerText, tickerTextClassName].join(" ")}>{item}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

ReactTicker.defaultProps = {
    data: [],
    delay: 0,
    tickerClassName: "",
    itemClassName: "",
    tickerTextClassName: "",
}

// BaseTicker.propTypes = {
//     data: PropTypes.array
// }


export default ReactTicker;
