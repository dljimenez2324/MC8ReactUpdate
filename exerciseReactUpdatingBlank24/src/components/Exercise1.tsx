import { useState } from "react";

//We need a button when the user clicks a button it will update the name: 'Zac' to name: 'Patrick'
// for us we do 'David' to 'Aaron'

const Exercise1 = () => {
    const [game, setGame] = useState({
        id:1,
        player: {
            name: "David",
        },
    });

    const handleClick = () => {
        // game.player.name = 'Aaron';

        setGame({
          ...game,
          player:{...game.player, name:'Aaron'}
        })
       
    }

    // to change it back to David make another helper function structured the same way but with the string as 'David'
    const handleClickBack = () => {
      setGame({
        ...game,
        player:{...game.player, name:'David'}
      })
    }

  return (
    <div className="exercise1">
        <h3>Exercise 1</h3>
        <div className="mx-2 p-2">{game.player.name}</div>
        <div>

        <button onClick={handleClick} className="col-2 btn btn-primary m-1">Click to Change Player's Name</button>
        <button onClick={handleClickBack} className="col-3 btn btn-primary m-1">Click to Change Player's Name Back</button>
        </div>
        <br></br>
    </div>
  )
}

export default Exercise1
