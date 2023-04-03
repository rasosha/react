import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormPage } from '../../pages/FormPage';

describe('FormPage test', async () => {
  it('Should render FormPage', async () => {
    await render(<FormPage />);
    expect(screen.getByTestId('FormPage')).toBeInTheDocument();
  });
});
