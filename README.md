
# React Ticker

A simple and customizable react ricker (news scroller) component.


## Installation

Install with npm

```bash
  npm install @guna81/react-ticker
```


## Demo

Checkout the [Demo](https://codesandbox.io/s/react-new-ticker-9g6ndd?file=/src/App.js).


## Usage/Examples

```javascript
export default function App() {
  const data = [
    {
      id: 1,
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    // more data ...
  ];

  const renderItem = (item) => {
    return (
      <p style={{ whiteSpace: "nowrap", color: "orange" }} >
        {item.value}
      </p>
    );
  };

  return (
    <div className="App">

      {/* using default ticker item component */}
      <ReactTicker
        data={data.map((item) => item.value)}
        speed={20}
        keyName="_id"
        tickerStyle={{
          position: "fixed",
          top: 0,
          left: "0",
          width: "100%",
          height: "40px",
          backgroundColor: "#fff",
          zIndex: 99,
          borderTop: "1px solid #e0e0e0"
        }}
        tickerClassName="news-ticker"
      />
      
      {/* using default ticker item component */}
      <ReactTicker
        data={data}
        component={renderItem}
        speed={40}
        keyName="_id"
        tickerStyle={{
          position: "fixed",
          bottom: 0,
          left: "0",
          width: "100%",
          height: "40px",
          backgroundColor: "#fff",
          zIndex: 99,
          borderTop: "1px solid #e0e0e0"
        }}
        tickerClassName="news-ticker"
      />
    </div>
  );
}

```


## API Reference

#### Props

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `array` | **Required**. List of *objects* or *strings*. |
| `component` | `react node` | Custom ticker item component. |
| `keyName` | `string` | Key of object (Required, if only the data is a list of objects.). |
| `speed` | `number` | Scroll speed (0 - 60).  |
| `delay` | `number` | Scroll delay. |
| `diretion` | `string` | Scroll direction. |
| `tickerClassName` | `string` | Ticker container class name. |
| `itemClassName` | `string` | Ticker item class name. |
| `tickerTextClassName` | `string` | Ticker text class name (Required, if only the data is a list of strings). |
| `tickerStyle` | `object` | Ticker container style. |
| `itemStyle` | `object` | Ticker item styles. |


- Component and keyName props are required if data is a list of objects.
- If data is a list of strings, components, and keyName props are unnecessary.