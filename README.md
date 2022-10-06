
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
      
      {/* using custom ticker item component */}
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

| Parameter | Type     | Description                | Default Value     |
| :-------- | :------- | :------------------------- | :---------------- |
| `data` | `array` | **Required**. List of *objects* or *strings*. | empty array |
| `component` | `react node` | Custom ticker item component. | null |
| `keyName` | `string` | Key of object (Required, if only the data is a list of objects.). | null |
| `speed` | `number` | Scroll speed (0 - 60).  | 24 |
| `delay` | `number` | Scroll delay. | 0 |
| `diretion` | `string` | Scroll direction. | normal |
| `tickerClassName` | `string` | Ticker container class name. | empty string |
| `itemClassName` | `string` | Ticker item class name. | empty string |
| `tickerTextClassName` | `string` | Ticker text class name (Required, if only the data is a list of strings). | empty string |
| `tickerStyle` | `object` | Ticker container style. | empty object |
| `itemStyle` | `object` | Ticker item styles. | empty object |
| `loop` | `boolean` | Infinite scroll. | true |


- Component and keyName props are required if data is a list of objects.
- If data is a list of strings, components, and keyName props are unnecessary.