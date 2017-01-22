import React from 'react';
import {render, unmountComponentAtNode, findDOMNode} from 'react-dom';
import Pace from '../src/index';

import expect from 'expect';

describe('react-pace-progress', function() {

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

  let node;

  beforeEach((done) => {
    node = document.createElement('div');
    document.body.appendChild(node);
    render(<Pace className="react-pace-element"/>, node, done);
  });

  it('progressbar should mount', function() {
    const barNode = node.querySelector('.react-pace-element');
    expect(barNode).toExist();
  })

});
