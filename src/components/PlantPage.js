import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  //introduce state to plants obj
  //set intial state to empty array
  const [plants, setPlants] = useState([])

  //search functionality is dynamic data, so introduce state
  //set initial state to render all plants
  const [searchedPlant, setSearchedPlant] = useState(plants)


  //create an event handle that will perform search functionality
  //define a constant that will represent the filtered plant
  //use the .filter method to look for plant's NAME 
  //use .includes to take in the search bar's value 
  //pass the the filtered plant into setter function to update state
  const handleSearch = (e) => {
    const searchedPlant = plants.filter(plant => plant.name.includes(e.target.value))
    setSearchedPlant(searchedPlant)
  }

  //@chris ran out of time to mess with the wonky functionality of 
  //search

  //perform get request to fetch plants obj
  //use the setter function to render plants obj with
  //retrieved data
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
      });
  }, []);


//pass down plants as a prop to PlantList component
//pass down the event handler to the Search component
  return (
    <main>
      <NewPlantForm />
      <Search handleSearch={handleSearch}/>
      <PlantList plants={searchedPlant} />
    </main>
  );
}

export default PlantPage;
