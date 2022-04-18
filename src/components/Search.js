import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="fixed z-10 flex justify-start p-3 m-3 mt-3 bg-white rounded-lg">
      <label className="relative block">
        <input
          className="block px-3 py-2 pl-2 border rounded-md shadow-sm w-80 border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Telusuri Kerajinan Tradisional Indonesia"
          name="search"
        ></input>
      </label>
      <button className="fill-slate-600">
        <span class="flex items-center pl-2 ">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </span>
      </button>
    </div>
  );
}
