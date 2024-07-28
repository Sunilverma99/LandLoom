import React from "react";
import { listData } from "../lib/dummydata";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Map from "../components/Map";

function ListPage() {
  const data = listData;

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 to-purple-400">
      <div className="w-2/3 p-6 flex flex-col gap-6 overflow-y-auto">
        <Filter />
        <div className="flex flex-col gap-6">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="w-1/3 p-2 bg-gradient-to-r from-purple-400 to-blue-400 shadow-lg h-full overflow-hidden">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
