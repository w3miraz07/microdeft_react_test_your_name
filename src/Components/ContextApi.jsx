import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

let apiData = createContext()

const ContextApi = () => {


    let [info, setInfo] = useState([])

    let getData = () => axios.get("https://react-interview.1putym.easypanel.host/api/product").then((response)=>{
        console.log(response);
    })

    useEffect(()=>{
        getData()
    })

  return (
    <apiData.Provider value={info}></apiData.Provider>
  )
}

export  {ContextApi, apiData}
