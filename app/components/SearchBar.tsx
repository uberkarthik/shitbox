'use client'
import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import {useState} from 'react'
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch = () => {}

  return (
    //onSubmit means this is a browser event so we use our client (interactive shit)
    <form className="seachbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>

    </form>
  )
}

export default SearchBar