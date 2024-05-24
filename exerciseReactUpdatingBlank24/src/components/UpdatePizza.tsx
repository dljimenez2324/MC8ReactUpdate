import React, { useState } from 'react'


//Here you want a button so when the user clicks the button it adds 'Cheese' to the toppoings
const UpdatePizza = () => {

    const [pizza, setPizza] = useState({
        name: 'King Aurthor Supreme',
        toppings: ['Mushroom, ','Onions, ']
    });

    const handleClick = () => {
        //pizza.toppings.push('Cheese');
        setPizza({
          ...pizza,
          toppings:[...pizza.toppings, 'cheese, ']
        })
        
    }
  return (
    <>
    
      <div className='updatePizza'>
        <h3>Update Pizza</h3>
        <div className='m-3'><strong>Selected Pizza Toppings: </strong> 
          {pizza.toppings}
        </div>
        <button className='btn btn-warning' onClick={handleClick}>Add Cheese</button>
        <br></br>
      </div>
      
    </>
    
  )
}

export default UpdatePizza
