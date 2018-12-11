import React from 'react';
import { render } from 'react-dom';
import Pace from '../src/index';

import expect from 'expect';

describe('react-pace-progress', function () {

  let node;

  beforeEach((done) => {
    node = document.createElement('div');
    document.body.appendChild(node);
    render(<Pace className="react-pace-element" />, node, done);
  });

  it('progressbar should mount', function () {
    const barNode = node.querySelector('.react-pace-element');
    expect(barNode).toBeInstanceOf(HTMLDivElement);
  })

});
