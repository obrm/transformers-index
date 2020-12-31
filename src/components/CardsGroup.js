import React from 'react';

import Card from './Card';

const CardsGroup = (props) => {

    const getCards = () => {
        return props.cards.map(card => <Card key={card.id} updateItem={props.updateItem} {...card} />);
    }

    return (
        <div className="row">
            {getCards()}
        </div>
    )
}

export default CardsGroup;
