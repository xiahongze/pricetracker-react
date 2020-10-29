import { render, waitForElement } from '@testing-library/react';
import React from 'react';
import PriceTable from './PriceTable';


test('renders learn react link', async () => {
    const { getByText } = render(<PriceTable />);
    const linkElement = await waitForElement(() => getByText(/Prices for/i));
    expect(linkElement).toBeInTheDocument();
});
