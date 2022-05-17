import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

function Info() {
  return (
    <div>
      <div className="fixed top-0 right-0 z-40 p-3 m-3 bg-white rounded-full">
        <Link to="/login">
          <button className="px-2" type="button">
            <FontAwesomeIcon icon={faRightToBracket} size="lg" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Info;
