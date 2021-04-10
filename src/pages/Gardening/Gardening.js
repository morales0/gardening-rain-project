import React, { useState } from 'react'
import { queryCrop } from '../../services/openFarmApi'

import styled from 'styled-components/macro'
import './Gardening.css'

const Gardening = () => {
   //State and variables
   const [query, setQuery] = useState("")
   const [search, setSearch] = useState("off")
   const [data, setData] = useState([])

   // Lifecycle

   // Methods
   const handleSearch = (e) => {
      e.preventDefault()
      setSearch("pending")
      // TODO: query cannot have spaces, must replace with plus signs
      queryCrop(query).then((data) => {
         console.log(data)
         setData(data.data)
         setSearch("found")
      })
   }

   // Render
   return (
      <div css={`padding: 24px 20px; overflow-y: auto;`}>
         <form onSubmit={(e) => handleSearch(e)}
            css={`
               display: flex;
               align-items: stretch;
            `}   
         >
            <input type="text" placeholder="Search crops..."
               onChange={(e) => setQuery(e.target.value)} 
               css={`
                  padding: 5px 8px;
               `}
               />
            <button type="submit">Search</button>
         </form>
         {search === "pending" &&
            <div>
               Looking for {query}...
            </div>
         } 
         {search === "found" &&
            <div>
               Found!
               <div key="cropsList">
                  {data.map((crop, i) => {
                     return (
                        <div key={`crop${i}`} css={`
                           padding: 10px;
                           margin-bottom: 12px;
                           border-bottom: 1px solid #444;
                        `}>
                           <p>{crop.attributes.binomial_name}</p>
                           <p>{crop.attributes.common_names}</p>
                           <p>{crop.attributes.description}</p>
                           {crop.attributes.main_image_path && 
                              <img src={crop.attributes.main_image_path} alt="crop" width="300px"/>
                           }
                        </div>
                     )
                  })}
               </div>
         
            </div>
         }
      </div>
   )
}

export default Gardening
