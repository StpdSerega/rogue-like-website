import React from "react";
import Item from "./item.js";
//takes an array of data as a prop and renders a list of components

export default function List({ data }) {
  return (
    <ul className="item-wrapper">
      {data.map(row => (
        <Item row={row} key={row.userID} />
      ))}
    </ul>
  );
}
