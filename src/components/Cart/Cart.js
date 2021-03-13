import React from 'react';

const Cart = (props) => {
    console.log(props.card);

    const card = props.card;
    const totalSalaries = card.reduce((salary, player) => salary + player.salary, 0);

    return (
        <div>
            <br />
            <table className={"table"}>
                <tr className="bg-primary">
                    <th><h4>Total Players Costing Per Match</h4></th>
                    <th><h4>${Math.round(totalSalaries)}</h4></th>
                </tr>
                <tr className={"bg-success"}>
                    <th><h4>Total Added Players</h4></th>
                    <th><h4>{card.length}</h4></th>
                </tr>
            </table>

        </div>
    );
}

export default Cart;