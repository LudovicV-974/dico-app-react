import React from "react";

import Phonetic from "./Phonetic";

import "./Results.css";

export default function Results(props){
    if (props.results){ 
        return(
    <div className = "Results">
        <h2 className= "text-capitalize">{props.results.word}</h2>
        {props.results.phonetics.map(function(phonetic,index){
            return(
                <div key={index}>
                    <Phonetic phonetic={phonetic}/>
                </div>
            )
        })}
    </div>
    )
  } else{
      return null;
  }
}
   