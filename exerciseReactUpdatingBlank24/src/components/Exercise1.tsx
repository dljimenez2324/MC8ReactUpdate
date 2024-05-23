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
        // setGame game.player.name = 'Aaron';
       
    }
  return (
    <div>
        <button onClick={handleClick}>Click to Change Name</button>
        <div>{game.player.name}</div>
    </div>
  )
}

export default Exercise1
