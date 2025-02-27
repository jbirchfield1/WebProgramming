import React from "react";
import Card from "./Card";

function CardList(){
const cards = [
    {title: "Card 1", content:"First", color:"black"},
    {title: "Card 2", content:"Second", color:"green"},
    {title: "Card 3", content:"Third", color:"blue"},
  ]

  return(
        cards.map((card,index) => (
          <Card key={index}{...card}/>
        ))
  );
}
  export default CardList;