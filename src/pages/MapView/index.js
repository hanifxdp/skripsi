import React from "react";
import MyMap from "../../components/MyMap";
import Search from "../../components/Search";
import Content from "../../components/Content";

function MapView() {
  return (
    <div>
      <div>
        <Search />
      </div>
      <Content />
      <MyMap />
    </div>
  );
}

export default MapView;
