import React from 'react';
import { render, screen } from '@testing-library/react';
import PageTable from './PageTable';


test('renders learn react link', () => {
    const { getByTestId } = render(<PageTable />);
    const table = getByTestId('page-table');
    // const linkElement = getByText(/price/i);
    expect(table).toBeInTheDocument();
    const header = table.firstChild;
    expect(header.nodeName).toBe('THEAD');
    expect(header.childNodes.length).toBe(1); // one row header
    expect(header.firstChild.childNodes.length).toBe(8); // eight columns
    expect(table.childNodes.length).toBe(2);
    const tbody = table.childNodes[1];
    expect(tbody.nodeName).toBe('TBODY');
});
