import React, { useState } from 'react'

function Head({setsearche}) {
  function Submithandler(e){
    e.preventDefault()
    setsearche(e.target.search.value)
  }
  return (
    <div className='header'>
      <h1>Movie Search</h1>
      <form onSubmit={(e)=>Submithandler(e)} >
        <label htmlFor="search"><span>Search :</span></label>
        <div className='input'>
          <input type="text" name='search' placeholder='i.e Batman'/>
          <button type='submit'>Searche</button>
        </div>
      </form>
    </div>
  )
}

export default Head
