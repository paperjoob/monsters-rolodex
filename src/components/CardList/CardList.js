import React from 'react';

import {Card} from '../Card/Card';
import './card-list.styles.css';

export const CardList = (props) => {
    return(
        <div className="card-list">
            {/* iterate over every element in this array */}
            { 
            props.monsters.map(monster => 
                <Card key={monster.id} monster={monster} />
            )}  
        </div>
    )
}