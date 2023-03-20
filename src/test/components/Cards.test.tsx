import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cards from '../../components/Cards';

describe('Cards tests', async () => {
  it('Should render 20 cards', async () => {
    await render(<Cards />);
    expect(screen.getAllByTestId(/card/)).toHaveLength(20);
  });
});
