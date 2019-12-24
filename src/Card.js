import React from 'react'
import './Card.css'

class Card extends React.Component{
    render(){
        //Individual card information
        let currentCard = this.props.currentCard;
        //console.log(currentCard);
        //console.log(this.props.allCards[currentCard])
        return(
            <div key={this.props.key} 
                id={this.props.currentCard}
                className='Card'
            >
                <button type='button'>Delete</button>
                <h3>{this.props.allCards[currentCard].title}</h3>
                <p>{this.props.allCards[currentCard].content}</p>
                
            </div>
        )
    }
}


export default Card