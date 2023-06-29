"use client"

import React ,{useState}from 'react'
import SearchMenufactu from './SearchMenufactu'


const SearchBar = () => {
const [menufature,setmenufature]=useState('')
    const handleSearch=()=>{
    
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__item'>
        <SearchMenufactu
        menufature={menufature}
        setmenufature={setmenufature} />
    </div>
    </form>
  )
}

export default SearchBar
