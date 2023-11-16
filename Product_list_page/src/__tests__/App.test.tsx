
import 'text-encoding';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

const server = setupServer(
  rest.get('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd', (req, res, ctx) => {
    return res(ctx.json({
      "products": [
      {
        "id": 1,
        "name": "Apple",
        "price": 1.10,
        "currency": "EUR",
        "category": "Fruits",
        "description": "Fresh and delicious apples from the local orchard."
      },
      {
        "id": 2,
        "name": "Banana",
        "price": 0.65,
        "currency": "EUR",
        "category": "Fruits",
        "description": "Ripe and sweet bananas, perfect for a healthy snack."
      },
      {
        "id": 3,
        "name": "Chicken Breast",
        "price": 3.25,
        "currency": "EUR",
        "category": "Meat",
        "description": "Boneless and skinless chicken breasts, great for grilling or baking."
      }
    ]
    }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays products', () => {
  render(<App/>)

  const product1 = screen.getByText('Apple');
  const product2 = screen.getByText('Banana');
  const product3 = screen.getByText('Chicken Breast');

  expect(product1).toBeInTheDocument();
  expect(product2).toBeInTheDocument();
  expect(product3).toBeInTheDocument();
});

