import "./CropItem.css"
import styled from 'styled-components/macro'

const CropItem = (props) => {
   return (
      <div className="CropItem">
         <h2>{props.name}</h2>
         
         <div css={`
            display: flex;
         `}>
            <img src={props.imgSrc} alt={props.name} 
               align="left" width="200px"
            />
            <p>{props.description}</p>
         </div>
      </div>
   )
}

export default CropItem
