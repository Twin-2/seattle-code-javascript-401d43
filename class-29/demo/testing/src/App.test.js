import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'

import App from './App';

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    let response = {
      results: [
        {name:"test 1"},
        {name:"test 2"},
      ]};

    return res(ctx.json(response));
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('fetches pokemon', async () => {

  render(<App />);

  // Find the button

  // Click the button
  fireEvent.click(screen.getByTestId('getpokemon'));

  // See that we have some pokemon rendering ...
  const items = await waitFor(() => screen.getAllByRole('listitem'))

  expect(items.length).toBeGreaterThan(0);

});
