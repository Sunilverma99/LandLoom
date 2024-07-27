import React from "react";
import Card from "../components/Card";
import { listData } from "../lib/dummydata.js";

function List() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {listData.map((item) => (
        <div key={item.id} className="w-full sm:w-1/2 p-4">
          <Card item={item} />
        </div>
      ))}
    </div>
  );
}

export default List;
