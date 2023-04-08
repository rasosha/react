import React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../../components/CardSmall';

const testCardProps = {
  id: 777,
  name: 'testname',
  species: 'testspecies',
  status: 'teststatus',
  gender: 'testgender',
  image: 'testimage',
  origin: {
    name: 'testoriginname',
    url: 'testoriginurl',
  },
  location: {
    name: undefined,
    url: undefined,
  },
};

describe('Card tests', async () => {
  it('Card renders', () => {
    render(<Card {...testCardProps} />);
    expect(screen.getByTestId(/card777/)).toBeInTheDocument();
  });

  it('Card name is correct', () => {
    render(<Card {...testCardProps} />);
    expect(screen.getByText(/testname/)).toBeInTheDocument();
  });
});
