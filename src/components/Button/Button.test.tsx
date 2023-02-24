import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Button from './Button'

describe('Button component', () => {
  it('Renders button with label Hello world', () => {
    // ARRANGE
    render(<Button label='Hello world' /> )
    // ACT
    // EXPECT
    expect(
      screen.getByRole('button')
    ).toHaveTextContent('Hello world');
  });
});
