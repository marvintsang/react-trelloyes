import React from 'react'
import Card from './Card'
import './List.css'

class List extends React.Component{
    //Render the list and iterate through the array in order to retrieve 
    //the corresponding object with matching ID
    render(){
        //console.log(this.props.currentListHeader)
        const currentList = this.props.currentCardId.map((cardId) =>
        <Card className = 'Card' key={cardId} currentCard={cardId} allCards={this.props.allCards}>
        </Card>
        )
        //console.log(currentList);
        //console.log(this.props.allCards);
        return (
        <div className="List-cards">{currentList}
            <button className="List-add-button">+ Add random card</button>
        </div>)
            
    }
}

export default List