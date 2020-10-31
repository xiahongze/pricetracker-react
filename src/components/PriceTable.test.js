import { render } from '@testing-library/react';
import React from 'react';
import PriceTable from './PriceTable';


test('renders price table', async () => {
    const { findByTestId } = render(<PriceTable />);
    const table = await findByTestId('price-table');
    expect(table).toBeInTheDocument();
    const header = table.firstChild;
    expect(header.nodeName).toBe('THEAD');
    expect(header.childNodes.length).toBe(1); // one row header
    expect(header.firstChild.childNodes.length).toBe(3); // eight columns
    expect(table.childNodes.length).toBe(2);
    const tbody = table.childNodes[1];
    expect(tbody.nodeName).toBe('TBODY');
});
