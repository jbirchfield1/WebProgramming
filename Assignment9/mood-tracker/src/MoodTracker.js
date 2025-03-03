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

    const Bored = () =>{
        setMood(prevMood => "😒");
        setSong(prevSong => "Mattel - Avenged Sevenfold");
        setStory(prevStory => "I was bored once.")
    }

    const Upset = () =>{
        setMood(prevMood => "😭");
        setSong(prevSong => "Lonely Day - System of a Down");
        setStory(prevStory => "I was upset once.")
    }

    const Angry = () =>{
        setMood(prevMood => "😡");
        setSong(prevSong => "I Hate Everything About You - Three Days Grace");
        setStory(prevStory => "I was angry once.")
    }

    return(
        <div style={{textAlign:"center", padding:"20px"}}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood}</p>
            <p>Related Song: {song}</p>
            <p>Story: {story}</p>
            <button onClick={VeryHappy} style={{margin: "5px", padding:"10px", background:"lightgreen"}}> Very Happy </button>
            <button onClick={Bored} style={{margin: "5px", padding:"10px", background:"lightblue"}}> Unamused </button>
            <button onClick={Upset} style={{margin: "5px", padding:"10px", background:"lightcoral"}}> Upset </button>
            <button onClick={Angry} style={{margin: "5px", padding:"10px", background:"lightgray"}}> Angry </button>
        </div>
    );
}