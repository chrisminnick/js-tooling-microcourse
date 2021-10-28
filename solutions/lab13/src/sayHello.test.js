import React from 'react';
import {render, screen} from '@testing-library/react';
import SayHello from '../src/scripts/SayHello.js';

  test('says Hello', () => {
    render(
      <SayHello />,
    );

    expect (screen.getByText(/Hello/));
});