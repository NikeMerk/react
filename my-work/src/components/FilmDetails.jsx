import React, { useState } from "react";
import useCount from "../hooks/useCount.js";

const FilmsDetails = ({ title, genre, seasonsCount }) => {
  let { count, increment, decrement } = useCount(0);
       
  return (
    <div>
      <h3>{title || "Something"}</h3>
      {Boolean(genre) && <span>{genre}</span>}
      <p>{seasonsCount >= 0 ? `${seasonsCount} seasons` : "null"}</p>
      <div className="button-block">
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default FilmsDetails;
