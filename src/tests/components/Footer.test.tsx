import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '../../components/Footer';

describe('Footer tests', async () => {
  it('Should render footer', async () => {
    await render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
