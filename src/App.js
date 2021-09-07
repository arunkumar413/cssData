import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([{}]);
  useEffect(function () {
    async function getData() {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      setData(await result.json());
    }

    getData();
  }, []);

  const elements = data.map(function (item, index) {
    return (
      <React.Fragment key={index.toString()}>
        <div className="row">
          <p> {item.id} </p>
        </div>
        <div className="row">
          <p> {item.name} </p>
        </div>
        <div className="row">
          <p> {item.username} </p>
        </div>
        <div className="row">
          <p> {item.email} </p>
        </div>
      </React.Fragment>
    );
  });

  const displayItems = function () {
    return (
      <div className="grid">
        <div className="header">
          <h4> Id </h4>
        </div>
        <div className="header">
          <h4> Name </h4>
        </div>
        <div className="header">
          <h4> User name </h4>
        </div>
        <div className="header">
          <h4> Email </h4>
        </div>
        {elements}
      </div>
    );
  };

  return (
    <div className="App">
      <h4> A simple CSS grid based data table </h4>
      <div>{displayItems()}</div>
    </div>
  );
}
