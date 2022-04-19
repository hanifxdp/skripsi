import React from "react";
import { Budaya, Search, MyMap } from "../../components";

function MapView() {
  return (
    <div>
      <div>
        <Search />
      </div>
      <Budaya />
      <MyMap />
    </div>
  );
}

export default MapView;
