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
        setColor("LemonChiffon");
        setSong("Don't Stop Me Now - Queen");
        setStory("One of the happiest stories I have is when my friends and I won a Bar Trivia competition against our former Quizbowl teacher.")
        setLink("https://youtu.be/HgzGwKwLmgM")
        
    }

    const Proud = () =>{
        setMood("🥹");
        setColor("LightGreen")
        setSong("My Hero - Foo Fighters");
        setStory("I felt and overwhelming feeling of pride when one of my sisters graduated college. I had helped her a decent amount with her classes and she is the only one of my sisters to have a Bachelors.")
        setLink("https://youtu.be/EqWRaAF6_WY")
        
    }

    const Upset = () =>{
        setMood("😭");
        setColor("LightCyan")
        setSong("In the End - Linkin Park");
        setStory("One time I was really upset was during the county fair in my home town. I had worked all summer to make sure the goat that I was showing would be in top shape by exercising with it and monitoring its diet. On the day of showing the goat got sick though and did not perform well at the show becuase it would not stand in the required form.")
        setLink("https://youtu.be/eVTXPUF4Oz4")
        
    }

    const Angry = () =>{
        setMood("😡");
        setColor("Tomato")
        setSong("I Hate Everything About You - Three Days Grace");
        setStory("One of the memories in which I was the angriest was when I left home to hang out with my cousin for a few days. When I came back, one of my sisters had thrown away the PS2 that I owned because she claimed that it took up too much space in our shared room.")
        setLink("https://youtu.be/d8ekz_CSBVg")
        
    }

    return(
        <div style={{textAlign:"center", padding:"20px", backgroundColor:color, borderRadius:10}}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood}</p>
            <p>Related Song: {song}</p>
            <a href={link} target="_blank">{link}</a>
            <p>Story: {story}</p>
            <button onClick={VeryHappy} style={{margin: "5px", padding:"10px", background:"LemonChiffon", borderRadius:5}}> Very Happy </button>
            <button onClick={Proud} style={{margin: "5px", padding:"10px", background:"LightGreen", borderRadius:5}}> Proud </button>
            <button onClick={Upset} style={{margin: "5px", padding:"10px", background:"LightCyan", borderRadius:5}}> Upset </button>
            <button onClick={Angry} style={{margin: "5px", padding:"10px", background:"Tomato", borderRadius:5}}> Angry </button>
        </div>
    );
}