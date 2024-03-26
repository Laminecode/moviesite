import { useState,useEffect } from "react"
import axios from 'axios'
import "./App.css"
import Card from './Card'
import Head from './Head.jsx'

//const API_URL ='https://www.omdbapi.com/?i=tt3896198&apikey=5805337f'


function App() {
  const [searche,setsearch] = useState('')
  const [result,setresult] = useState([])
  const [info,setinfo] = useState();
  const [title,settitle] = useState('')
  useEffect(()=>{
    if(searche==='') return
    axios.get(`https://www.omdbapi.com/?s=${searche}&apikey=5805337f`)
    .then(res => setresult(res.data.Search))
    .catch(err => console.log(err))
  })

  useEffect(()=>{
    if (title === '') return
    axios.get(`https://www.omdbapi.com/?t=${title}&apikey=5805337f`)
    .then(res =>setinfo(res.data))
    .catch(err =>console.log(err) )
    return ()=> {
      settitle('')
    }
  })
  function handcolse(){
    setinfo(false)
  }
  return (
    <>{info && 
          <div className="moreInfo">
            <div className="details">
              <img src={info.Poster} alt="image" />
              <h3>{info.Title}</h3>
            </div>
            <button type="button" onClick={()=>handcolse()}>close</button>
          </div>
    }
    <Head setsearche={setsearch} />
    <div className="movies">
    {
      result == undefined ?
        <h1>Movie not found</h1>:
        result.length === 0 ?
          <h1>Search for movie</h1>:
          result.map((res,index) =>(
          <Card Title ={res.Title} Year={res.Year} Type ={res.Type} Poster={res.Poster} key={index} onClick = {()=> settitle(res.Title)}/>
          ))
    }
    </div>
    </>
  )
}

export default App
