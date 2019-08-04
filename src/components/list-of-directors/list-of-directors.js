import React from 'react';

import SearchBar from '../searchbar/searchbar';
import listOfDirStyle from './list-of-directors.module.scss';

const ListOfDir = ({ options }) => {
  
  return (
    <div className={listOfDirStyle.listOfDir} style={{ background: '#e6e6e6' }}>
      <div className="container">
        <SearchBar options={options} />
      </div>
    </div>
  )
}

export default ListOfDir;