import { render, waitForElement } from '@testing-library/react';
import React from 'react';
import ConfigTable from './ConfigTable';


test('renders config table', async () => {
    const { getByTestId } = render(<ConfigTable />);
    const table = await waitForElement(() => getByTestId('config-table'));
    // const linkElement = getByText(/price/i);
    expect(table).toBeInTheDocument();
    const header = table.firstChild;
    expect(header.nodeName).toBe('THEAD');
    expect(header.childNodes.length).toBe(1); // one row header
    expect(header.firstChild.childNodes.length).toBe(4); // eight columns
    expect(table.childNodes.length).toBe(2);
    const tbody = table.childNodes[1];
    expect(tbody.nodeName).toBe('TBODY');
});
