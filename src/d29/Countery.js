import React from "react";

function Countery(props){
    const count =0;

    return(
        <div>
            {count && <h1>현재카운트:{count}</h1>}
        </div>
    );
}
export default Countery;