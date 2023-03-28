import React from 'react';
import App from './App';
import Renderer from 'react-test-renderer';

test('Snapshot Test',() =>{
    const tree = Renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();

});