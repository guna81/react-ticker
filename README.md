
# React Ticker

A simple and flexible react ticker (news slider) component.


## Installation

Install with npm

```bash
  npm install @guna81/react-ticker
```
    
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
| `data` | `array` | **Required**. list of *objects* or *strings* |
| `component` | `react node` | custom ticker item component |
| `keyName` | `string` | unique key of react component |
| `speed` | `number` | sliding speed  |
| `delay` | `number` | slide starting delay |
| `diretion` | `string` | slide direction |
| `tickerClassName` | `string` |ticker container class name |
| `itemClassName` | `string` | ticker item class name |
| `tickerTextClassName` | `string` | ticker text class name (only if data is list of strings) |
| `tickerStyle` | `object` | ticker container style |
| `itemStyle` | `object` | ticker item styles |


- Componet and keyName props are required if data is given as list of objects.
- If data is given as list of strings component and keyName props are invalid