import React, {useState} from "react";

//Pass down the plant prop
//set the img, name and price through props of plant
//Stock is dynamic data, so introduce state
//Set the intial state to true, so all plants are in stock on first render
//Create a function that will set the stock
//if stock is true (actually in stock); if stock is false (out of stock)
//Use inStock as parameter for setter function and returns false with
//bang operator if plants aren't in stock
//Create an onClick event that callsback your function
//Set the intial condition of the ternary to your state variable


function PlantCard({plant}) {

  const [inStock, setInStock] = useState(true)

  const handleStock = () => {
    setInStock((inStock) => !inStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      { inStock ? (
        <button onClick = {handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick = {handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
