import React from 'react';
import Dictionary from './Dictionary';
import Renderer from 'react-test-renderer';

test('Snapshot Test',() =>{
    const tree = Renderer.create(<Dictionary/>).toJSON();
    expect(tree).toMatchSnapshot();

});