import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders This is the home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is the home page/i);
  expect(linkElement).toBeInTheDocument();
});
