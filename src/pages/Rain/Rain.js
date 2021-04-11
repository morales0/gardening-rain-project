
import React, { useState } from 'react'
import './Rain.css'

const Rain = () => {
   const [rainfall, setRainfall] = useState("")
   const [rWidth, setRWidth] = useState("")
   const [rLength, setRLength] = useState("")
   const [rArea, setRArea] = useState("")
   const [prec, setPrec] = useState(0)
   
   const [calculated, setCalculated] = useState("false")

   function calcRainwater () {
      let tmp1 = prec*2
      
      setCalculated("true")
      if(prec == ""){
         setCalculated("error")
      } else {
         if(rArea != ""){
            setRainfall(rArea*prec)
         } else if (rWidth != "" && rLength != "") {
            setRainfall(rWidth*rLength*prec)
         } else {
            setCalculated("error")
         }
      }
      
      
   }
   function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }
   return (
      <div class="row" id="i90k">
  <div class="cell" id="i3pb">
    <div id="iayf">
      <b>Roof Rain Water Calculator
      </b>
    </div>
    <p class="paragraph" id="iorj">Why does rain water mater so much? What are the benefits of it?
    </p>
    <div class="row" id="izzc">
      <div class="cell" id="i5abt">
        <form class="form" id="i5rob">
          <div class="row" id="ihw4u">
            <div class="cell">
              <div id="iv0ej">
                <b>Please Enter:
                </b>
              </div>
              <div class="row" id="ixdhq">
                <div class="cell" id="ipzv7">
                  <label class="label" id="ifl63">Total Roof Area</label>
                  <input onChange={event => setRArea(event.target.value)} placeholder="Roof area in square meters" type="number" class="input" id="i8wr3"/>
                  <div id="ijy6g">
                    <b>Or:
                    </b>
                  </div>
                  <label class="label" id="isn8w">Roof Length</label>
                  <input onChange={event => setRLength(event.target.value)} placeholder="Roof length in meters" type="number" class="input" id="icx3j"/>
                  <label class="label" id="it9wg">Roof Width</label>
                  <input onChange={event => setRWidth(event.target.value)}  name="" placeholder="Roof width in meters" type="number" class="input" id="ijvaf"/>
                </div>
              </div>
              <div class="row" id="i8e9t">
                <div class="cell" id="ie2qg">
                  <div id="iwypk">
                    <b>Home&#039;s Yearly Precipitation
                    </b>
                  </div>
                  <label class="label" id="iszuhx">Use the map and legend on the right to estimate your home&#039;s yearly precipitation!</label>
                  <input onChange={event => setPrec(event.target.value)} placeholder="Precipitation in millimeters" type="number" class="input" id="i30zj"/>
                </div>
              </div>
              <div class="form-group" id="icyfr">
                <button onClick={calcRainwater} type="button" class="button" id="i2wy9">Calculate</button>
              </div>
              {calculated === "error" &&
                  <p>Check that all necessary fields have been filled in!</p>
               }
            </div>
            <div class="cell" id="ivelu">
              <div id="iwemu">
                <div class="embed-container">
                  <iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="BitCamp Map 1" src="//bwo2bytcyp53z5sp.maps.arcgis.com/apps/Embed/index.html?webmap=7195beb922324f0ca0fecaf284da1d7c&extent=-125.3977,25.9344,-60.4905,54.1213&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&disable_scroll=true&theme=light"></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="row" id="ipak6">
          </div>
          <div class="form-group" id="i9q8e">
          </div>
          <div class="form-group" id="ihl3p">
          </div>
          <div class="form-group">
          </div>
        </form>
        {calculated === "true" &&
               <div class="row" id="i9j76">
                  <div class="cell" id="i24ah">
                     <div id="iwvki">Estimated Yearly Water Collection:
                     </div>
                     <div class="row" id="iee4p">
                     <div class="cell" id="inlgx">
                        <div id="i1naj">{numberWithCommas(rainfall)} Liters
                        </div>
                     </div>
                     <div class="cell" id="iyqlza">
                        <div id="ie251">What can you do with all this water? Well, you can:
                        </div>
                        <div id="ieqy6t">- Fill a watering can {numberWithCommas(rainfall/10)} times over
                           <div>- Flush a toilet {numberWithCommas(rainfall/5)} times
                           </div>
                           <div>- Fill a 12ft x 12ft pool {rainfall/20000} times
                           </div>
                        </div>
                     </div>
                     </div>
                  </div>
               </div>
            }
      </div>
    </div>
  </div>
</div>
   )
}

export default Rain
