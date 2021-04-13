import React from "react";
import Meaning from "./Meaning";

export default function MeaningResults(props){
    if (props.results){ 
        return(
    <div className = "MeaningResults">
        <section>
        {props.results.meanings.map(function(meaning,index){
            return <div key = {index}>
                <Meaning meaning={meaning} />
                </div>
        })}
        </section>
    </div>
    )
  } else{
      return null;
  }
}