import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Budaya(props) {
  const { name, onClose } = props;

  return (
    <div className="">
      <div className="">
        Provinsi {name}
        <FontAwesomeIcon className="" icon={faClose} onClick={onClose} />
      </div>
      Content
    </div>
  );
}
