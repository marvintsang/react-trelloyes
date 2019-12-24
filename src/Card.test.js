import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import renderer from 'react-test-renderer'

describe('smoke test', () => {
    it('card test', () => {
        //Are the cards displaying the way that they should be
        //Expecting props, can be any values
      const div = document.createElement('div');
      ReactDOM.render(<Card />, div);
      ReactDOM.unmountComponentAtNode(div);
      });

    it('snap test', ()=>{
        //making sure it loads with the components it needs
    const obj = {one:{title:'thetitle', content:'thecontent'}}
    const tree = renderer.create(<Card currentCard='one' allCards={obj} />).toJSON();
    expect(tree).toMatchSnapshot()

    })
})
