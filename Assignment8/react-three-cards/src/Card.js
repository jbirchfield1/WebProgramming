import React from "react";
import "./Card.css"; //import css for styling



function Card({title, content, color}){
    const handleClick = () => {
        alert(title);
      };


    return(
        <div className="card" style = {{backgroundColor:color}}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}
export default Card;