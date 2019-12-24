import React from 'react';
import List from './List'
import './App.css'

/*function App() {
  return (
    <main className='App'>
      {/* content goes here }
      <h1>I AM THE MAIN CONTENT HERE</h1>
    </main>
  );
}*/

//send down a function holding an event handler, down as a props
//this.props()

class App extends React.Component{
  constructor(props){
  super(props)

  this.state = {List:[], allCards:{}}
  }

  componentDidMount(){
    //only executed once, this can update state and store information inside of it
    this.setState({ 
      List:this.props.store.lists, allCards:this.props.store.allCards
    })
  }

  render(){
    //state now holds the information from the store.js
    //console.log(this.state);
    //state.List holds the information of the lists
    //   console.log(this.state.List)
    //   console.log(this.state.allCards)
    //this const maps out the information from the state.List and presents them
    //as unordered lists, with the list ID being in the ul and the cardIds
    const allLists = this.state.List.map((list) => 
      <div className='List'>
        
        <header className="List-header">
          <h2>
          {list.header}
          </h2>
        </header>

        {/*{list.cardIds}*/}
        <List 
          key={list.id}
          currentCardId={list.cardIds}
          allCards={this.state.allCards} 
          currentListHeader={list.header}
        />

      </div>
    )
    //Returns the main div that contains the entire App-lists
    return(
      <div className='App-list'>{allLists}</div>
    )
  }
}


export default App;