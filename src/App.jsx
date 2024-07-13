
import axios from 'axios';
import './App.css'
import Banner from './Components/Banner'
import { createContext } from 'react';

let info = createContext

function App() {

  let apiData = () =>{
    axios.get("https://schema.postman.com/json/collection/v2.1.0/collection.json").then((response)=>{
      console.log(response);
    })
  }

  return (
    <>

     <Banner/>
     
    </>
  )
}

export default App
