import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Button from './Button'

describe('Button component', () => {
  it('Renders button with label Hello world', () => {

    render(<Button size={'2'} variant={'gray'}>Hello world</Button> )
 
    expect(
      screen.getByRole('button')
    ).toHaveTextContent('Hello world');
  });
});
