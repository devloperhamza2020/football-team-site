import { useState } from 'react';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData/players';
import PlayerCard from '../PlayerCard/PlayerCard';

const Player = () => {

    const [cart, setCart] = useState([]);

    const handleSelect = (player) =>{

        const exitId = cart.find(newId => newId.id === player.id);

        // if(exitId)
        // {
        //     alert("Palyer is already selected!");
        // }
        // else{
        //     const wholeCart = [...cart, player];
        //     setCart(wholeCart);
        // }

        const wholeCart = [...cart, player];
        setCart(wholeCart);
    }   


    // This is for total salary count
    let salaryTotal = 0;
    for(let i = 0; i < cart.length; i++)
    {
        const salary = parseFloat(cart[i].salary);
        salaryTotal = salaryTotal + salary;
    }


    return (
        <div>
            <div>
                <h3>Selected Player: {cart.length}</h3>
                <h3>Total Salary: {salaryTotal}</h3>
                {
                    cart.map(player => <Cart cart={player} />)
                }
            </div>
            {
                fakeData.map(info => <PlayerCard handleSelect={handleSelect} info={info} />)
            }
        </div>
    );
};

export default Player;