import React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../../../components/Card/CardSmall';

const testCardProps = {
  id: 777,
  name: 'testname',
};

describe('Card tests', async () => {
  it('Card renders', () => {
    render(<Card key={testCardProps.id} cards={testCardProps} />);
    expect(screen.getByTestId(/card777/)).toBeInTheDocument();
  });

  it('Card name is correct', () => {
    render(<Card key={testCardProps.id} cards={testCardProps} />);
    expect(screen.getByText(/testname/)).toBeInTheDocument();
  });
});
