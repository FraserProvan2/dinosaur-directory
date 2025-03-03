import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quiz menu', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dinosaur Quiz/i);
  expect(linkElement).toBeInTheDocument();
});
