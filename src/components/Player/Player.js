import React from 'react';
import './Player.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    // console.log(props);
    const { image, first_name, last_name, salary } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="player">
            <img src={image} alt="" />
            <h3>{first_name} {last_name}</h3>
            <h5>Auction Price ${Math.round(salary)}</h5>
            <button
                className={'btn-sm btn-primary'}
                onClick={() => handleAddPlayer(props.player)}>
                <FontAwesomeIcon icon={faMoneyBillAlt} /> Add To Team
                </button>
        </div>
    );
};

export default Player;