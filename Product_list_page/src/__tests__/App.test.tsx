import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the App component', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Search by name/category');
  expect(inputElement).toBeInTheDocument();
});