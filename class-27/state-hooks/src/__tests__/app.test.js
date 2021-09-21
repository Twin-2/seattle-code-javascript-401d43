import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App.js';

test('our application loads and contains starter data', async () => {
  render(<App />);
  const name = await waitFor(() => screen.getByTestId('name'));
  expect(name).toHaveTextContent('initial name');
});

test('our counter button says Update Counter', async() => {
  render(<App />);
  const btn = screen.getByText('Update Count');
  console.log(btn);
});