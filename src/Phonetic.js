import React from "react";
import "./Phonetics.css";
//onClick={props.phonetic.audio}>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';


export default function Phonetic(props){
    console.log(props.phonetic);
    let likeAudio = new Audio(props.phonetic.audio);
    let playSound = audioFile => {
    audioFile.play();
}
    return (
        <div className="Phonetic">
            <button className = "btn" onClick={() => playSound(likeAudio)}>
            <FontAwesomeIcon className= "icon" icon={faVolumeUp} /> 
            </button>            
            <span className= "text">
            {props.phonetic.text}
            </span>           
        </div>
    );
}