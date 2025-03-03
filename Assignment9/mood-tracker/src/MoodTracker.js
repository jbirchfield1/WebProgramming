import React from 'react';
import {useState} from 'react';

export default function MoodTracker(){
    const [mood, setMood] = useState("😊");
    const [song, setSong] = useState("");
    const [story, setStory] = useState("")

    const VeryHappy = () =>{
        setMood(prevMood => "😂");
        setSong(prevSong => "Don't Stop Me Now - Queen");
        setStory(prevStory => "I was happy once.")
    }

    return(
        <div style={{textAlign:"center", padding:"20px"}}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood}</p>
            <p>Related Song: {song}</p>
            <p>Story: {story}</p>
            <button onClick={VeryHappy} style={{margin: "5px", padding:"10px", background:"lightgreen"}}> Very Happy </button>
            <button onClick={()=>setMood("😒")} style={{margin: "5px", padding:"10px", background:"lightblue"}}> Unamused </button>
            <button onClick={()=>setMood("😭")} style={{margin: "5px", padding:"10px", background:"lightcoral"}}> Upset </button>
            <button onClick={()=>setMood("😁")} style={{margin: "5px", padding:"10px", background:"lightgray"}}> Beaming </button>
        </div>
    );
}