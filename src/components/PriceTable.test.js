import React from 'react';
import { render } from '@testing-library/react';
import PriceTable from './PriceTable';


test('renders learn react link', () => {
    const { getByText } = render(<PriceTable />);
    const linkElement = getByText(/price/i);
    expect(linkElement).toBeInTheDocument();
});
