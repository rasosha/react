import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import IndexPage from '../../pages/IndexPage';

describe('IndexPage test', async () => {
  it('Should render IndexPage', async () => {
    await render(<IndexPage />);
    expect(screen.getByTestId('IndexPage')).toBeInTheDocument();
  });
});
