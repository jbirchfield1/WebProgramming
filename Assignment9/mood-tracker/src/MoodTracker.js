import React from 'react';
import {useState} from 'react';

export default function MoodTracker(){
    const [mood, setMood] = useState("😊");
    const [song, setSong] = useState("");
    const [story, setStory] = useState("");
    const [link, setLink] = useState("");
    const [color, setColor] = useState("aquamarine");

    const VeryHappy = () =>{
        setMood("😂");
        setSong("Don't Stop Me Now - Queen");
        setStory("One of the happiest stories I have is when my friends and I won a Bar Trivia competition against our former Quizbowl teacher.")
        setLink("https://youtu.be/HgzGwKwLmgM")
        setColor("LemonChiffon")
    }

    const Bored = () =>{
        setMood("😒");
        setSong("Mattel - Avenged Sevenfold");
        setStory("I was bored once.")
        setLink("https://youtu.be/21dNBtcDzUg")
        setColor("Gainsboro")
    }

    const Upset = () =>{
        setMood("😭");
        setSong("Lonely Day - System of a Down");
        setStory("I was upset once.")
        setLink("https://youtu.be/DnGdoEa1tPg")
        setColor("LightCyan")
    }

    const Angry = () =>{
        setMood("😡");
        setSong("I Hate Everything About You - Three Days Grace");
        setStory("One of the memories in which I was the angriest was when I left home to hang out with my cousin for a few days. When I came back, one of my sisters had thrown away the PS2 that I owned because she claimed that it took up too much space in our shared room.")
        setLink("https://youtu.be/d8ekz_CSBVg")
        setColor("Tomato")
    }

    return(
        <div style={{textAlign:"center", padding:"20px", backgroundColor:color, borderRadius:10}}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood}</p>
            <p>Related Song: {song}</p>
            <a href={link} target="_blank">{link}</a>
            <p>Story: {story}</p>
            <button onClick={VeryHappy} style={{margin: "5px", padding:"10px", background:"LemonChiffon", borderRadius:5}}> Very Happy </button>
            <button onClick={Bored} style={{margin: "5px", padding:"10px", background:"Gainsboro", borderRadius:5}}> Unamused </button>
            <button onClick={Upset} style={{margin: "5px", padding:"10px", background:"LightCyan", borderRadius:5}}> Upset </button>
            <button onClick={Angry} style={{margin: "5px", padding:"10px", background:"Tomato", borderRadius:5}}> Angry </button>
        </div>
    );
}