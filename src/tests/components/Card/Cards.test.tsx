import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cards from '../../../components/Card/Cards';

describe('Cards tests', async () => {
  it('Should render cards div', async () => {
    await render(<Cards />);
    expect(screen.getByTestId('cards')).toBeInTheDocument();
  });
});
