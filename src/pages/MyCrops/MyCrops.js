import React, { useState } from "react";

const MyCrops = (props) => {

  return (
    <div>
      {props.listofCrp.forEach((element, i) => {
        return (
          <div>
            <p1>
              {i}. {element}
            </p1>
          </div>
        );
      })}
    </div>
  );
};

export default MyCrops;