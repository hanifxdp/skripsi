import React, { useState } from "react";
import { Budaya, Search, MyMap } from "../../components";
import { provincePinData } from "../../data/Data";
import Peta from "../../data/indonesia-prov.json";

function MapView() {
  const [locationName, setlocationName] = useState("");
  const [openBudaya, setOpenBudaya] = useState(false);

  const handleClickLocation = (e) => {
    setlocationName(e);
    setOpenBudaya(true);
  };
  return (
    <div>
      <div>
        <Search />
      </div>
      {openBudaya && (
        <Budaya name={locationName} onClose={() => setOpenBudaya(false)} />
      )}
      <MyMap
        handleClickLocation={handleClickLocation}
        geoJson={Peta}
        data={provincePinData}
      />
    </div>
  );
}

export default MapView;
