import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app name', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Pricetracker/i);
  expect(linkElement).toBeInTheDocument();
});

it("should have render the internal links correctly", () => {
  const { getByText } = render(<App />);
  expect(getByText("Pages").href).toMatch(/\/pages/);
  // fireEvent.click(linkElement, { button: 0 });
  // const item = await screen.findByText(/Next Check/);
  // expect(item).toBeInTheDocument();
});