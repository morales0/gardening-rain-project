import React, { useState } from 'react'
import { queryCrop } from '../../services/openFarmApi'

import styled from 'styled-components/macro'
import './Gardening.css'

const Gardening = () => {
   const [query, setQuery] = useState("")
   const [search, setSearch] = useState("off")
   const [data, setData] = useState([])


   const handleSearch = () => {
      setSearch("pending")
      // TODO: query cannot have spaces, must replace with plus signs
      queryCrop(query).then((data) => {
         console.log(data)
         setData(data.data)
         setSearch("found")
      })
   }

   return (
      <div>
         <div>
            <input type="text" placeholder="Search crops..."
               onChange={(e) => setQuery(e.target.value)} />
            <button onClick={() => handleSearch()}>Search</button>
         </div>
         {search === "pending" &&
            <div>
               Looking for {query}...
            </div>
         } 
         {search === "found" &&
            <div>
               Found!
               <div>
                  {data.map((crop) => {
                     return <div css={`
                        padding: 10px;
                        margin-bottom: 12px;
                        border-bottom: 1px solid #444;
                        
                     `}>
                        <p>{crop.attributes.binomial_name}</p>
                        <p>{crop.attributes.common_names}</p>
                        <p>{crop.attributes.description}</p>
                     </div>
                  })}
               </div>
         
            </div>
         }
      </div>
   )
}

export default Gardening
