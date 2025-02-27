import React from "react";
import "./Card.css"; //import css for styling



function Card({title, content, color}){
    const handleClick = () => {
        alert(title);
      };

    const getRandomColor = () => {
        let letters="0123456789ABCDEF";
        let color="#";
        for(let i=0;i<6;i++){
            color+=letters[Math.floor(Math.random()*16)]
        }
        return color;
        }
    
    let buttonColor = getRandomColor();
    return(
        <div className="card" style = {{backgroundColor:color}}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={handleClick} style={{backgroundColor:buttonColor}}>Click Me!</button>
        </div>
    );
}
export default Card;