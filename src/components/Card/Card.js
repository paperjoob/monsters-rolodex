import React from 'react';

import './card.styles.css';

// Card shows the image, name and email of monsters
export const Card = (props) => {
    return(
        <div className='card-container'>
            {/* image is dependent on the monster id */}
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h1>{props.monster.name}</h1>
            <h3>{props.monster.email}</h3>
        </div>
    )
}