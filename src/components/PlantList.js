import React from "react";
import PlantCard from "./PlantCard";


//in order to display the plants
//map through the plants obj and pass the plants to PlantCard component
//INCLUDE UNIQUE ID'S
function PlantList({plants}) {
  return (
    <ul className="cards">
      {plants.map(plant => 
    <PlantCard key={plant.id} plant={plant} />)}
    </ul>
  );
}

export default PlantList;
