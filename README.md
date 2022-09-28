
# React Ticker

A simple and customizable react ricker (news scroller) component.


## Installation

Install with npm

```bash
  npm install @guna81/react-ticker
```


## Demo

Checkout the [Demo](https://duckduckgo.com).


## Usage/Examples

```javascript
import { ReactTicker } from "@guna81/react-ticker";

function App() {
  return (
    <ReactTicker
      data={news}
      component={renderItem}
      speed={30}
      diretion="normal"
      keyName="_id"
      tickerClassName="ticker"
      itemClassName="ticker__item"
      tickerTextClassName="ticker__text"
      tickerStyle={{ height: "30px", backgroundColor: "#E03100" }}
      itemStyle={{ color: "#fff", fontSize: "14px", fontWeight: "bold" }}
    />
  )
}
```


## API Reference

#### Props

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `array` | **Required**. List of *objects* or *strings*. |
| `component` | `react node` | Custom ticker item component. |
| `keyName` | `string` | Key of object (Required, if only the data is a list of objects.). |
| `speed` | `number` | scroll speed. |
| `delay` | `number` | scroll delay. |
| `diretion` | `string` | scroll direction. |
| `tickerClassName` | `string` |ticker container class name. |
| `itemClassName` | `string` | ticker item class name. |
| `tickerTextClassName` | `string` | ticker text class name (Required, if only the data is a list of strings). |
| `tickerStyle` | `object` | ticker container style. |
| `itemStyle` | `object` | ticker item styles. |


- Component and keyName props are required if data is a list of objects.
- If data is a list of strings, components, and keyName props are unnecessary.