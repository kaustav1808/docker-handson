import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello kaustav link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello kaustav/i);
  expect(linkElement).toBeInTheDocument();
});
