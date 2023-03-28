import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from '../../pages/AboutPage';

describe('AboutPage test', async () => {
  it('Should render AboutPage', async () => {
    await render(<AboutPage />);
    expect(screen.getByText(/Probably something needs to be written here..../)).toBeInTheDocument();
  });
});
