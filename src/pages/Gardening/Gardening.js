import React, { useState } from 'react'
import { queryCrop } from '../../services/openFarmApi'

import styled from 'styled-components/macro'
import './Gardening.css'
import { CropItem } from '../../components'

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

            {search === "pending" &&
               <div>
                  Looking for {query}...
               </div>
            }
            {search === "found" &&
               <div>
                  Found!
               </div>
            } 
         </form>
         
         {search === "found" &&
            <div>
               {/* TODO: Make into separate component */}
               <div key="cropsList">
                  {data.map((crop, i) => 
                     <CropItem key = {`cropItem${i}`} 
                        name = {crop.attributes.name}
                        description = {crop.attributes.description}
                        imgSrc = {crop.attributes.main_image_path}
                     />
                  )}
               </div>
         
            </div>
         }
      </div>
   )
}

export default Gardening
