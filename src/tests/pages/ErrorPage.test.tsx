import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorPage from '../../pages/ErrorPage';

describe('ErrorPage test', async () => {
  it('Should render ErrorPage', async () => {
    await render(<ErrorPage />);
    expect(screen.getByText(/Sorry, page not found/)).toBeInTheDocument();
  });
});
