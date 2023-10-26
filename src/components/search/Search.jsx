import React, { useState } from 'react'

const Search = () => { return (
    <>
    <div className="flex w-full">
      <input className="border-2 h-12 pl-2 mr-5 rounded-md focus:outline-none text-black w-full" type="search" name="search" placeholder="Search" />
      <button type="submit" className=" top-3 w-6 mr-10">
        <img src="/free-icon-search-3682268.png" alt="альтернативный текст"></img>
      </button>
    </div>
    </>
  )
}

export default Search