import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [apiData, setApiData] = useState([]);

  const getData = async () => {
    try {
      const request = axios.get("https://jsonplaceholder.typicode.com/posts/");
      const response = await request;
      setApiData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  let shortenedApiList = apiData.slice(0, 10);

  const apiList = shortenedApiList.map((item) => {
    return <div key={item.id}>{item.title}</div>;
  });

  useEffect(() => {
    getData();
  });

  const list = items.map((item, keys) => {
    return (
      <div key={keys}>
        <p>{item}</p>
      </div>
    );
  });

  const addItem = () => {
    setItems([value, ...items]);
    setValue("");
  };
  const removeAllItems = () => {
    setItems([]);
  };

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MyButton onClick={addItem}>Add Item</MyButton>
      <MyButton onClick={removeAllItems}>Remove Items</MyButton>
      {list}
      {apiList}
    </div>
  );
}

const MyButton = (props) => {
  const useStyles = {
    backgroundColor: "gold",
    color: "black",
    margin: "2px",
    border: "1px solid transparent",
    borderRadius: "5px"
  };

  return (
    <>
      <button onClick={props.onClick} style={useStyles}>
        {props.children}
      </button>
    </>
  );
};
