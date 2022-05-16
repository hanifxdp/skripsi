import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import SearchField from './SearchField';

export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [openResult, setOpenResult] = useState(false);

  const handleInput = (e) => {
    setTimeout(() => {
      setKeyword(e.target.value);
    }, 1500);
  };

  const inputProps = {
    placeholder: 'Telusuri Kerajinan Tradisional Indonesia...',
    onChange: handleInput
  };

  const handleSubmit = () => {
    setOpenResult(true);
  };

  console.log(openResult);

  return (
    <div className="fixed z-40 p-3 m-3 bg-white rounded-lg w-96">
      <SearchField inputProps={inputProps} className="" handleSubmit={handleSubmit} />
      {keyword && (
        <div className="py-3 pl-3">
          <div className="flex">
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="" />
            </span>
            <p className="pl-3">{keyword}</p>
          </div>
        </div>
      )}
    </div>
  );
}
