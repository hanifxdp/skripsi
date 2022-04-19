import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Budaya(props) {
  const { name, onClose } = props;

  return (
    <div className="absolute w-full bg-white">
      <div className="flex pb-1 mb-2 border justify-content ">
        Provinsi {name}
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faClose}
          onClick={onClose}
        />
      </div>
      Content
    </div>
  );
}
