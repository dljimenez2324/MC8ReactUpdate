import React, { useState } from 'react'


//Here you want a button so when the user clicks the button it adds 'Cheese' to the toppoings
const UpdatePizza = () => {

    const [pizza, setPizza] = useState({
        name: 'King Aurthor Supreme',
        toppings: ['Mushroom,','Onions,']
    });

    const handleClick = () => {
        //pizza.toppings.push('Cheese');

        
    }
  return (
    <div>
      
    </div>
  )
}

export default UpdatePizza
