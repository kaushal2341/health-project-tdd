import React from 'react';
import {app} from '..';

describe('Provider Test' , () => {
    it('should have one store available',() =>{
        expect(app.props.store).toBeDefined();
    });
})