import { render } from '@testing-library/react';
import { rest } from 'msw';
import React from 'react';
import config from "../config";
import { server } from "../setupTests";
import PageTable from './PageTable';

test('renders page table', async () => {
    const { findByTestId } = render(<PageTable />);
    const table = await findByTestId('page-table');
    expect(table).toBeInTheDocument();
    const header = table.firstChild;
    expect(header.nodeName).toBe('THEAD');
    expect(header.childNodes.length).toBe(1); // one row header
    expect(header.firstChild.childNodes.length).toBe(8); // eight columns
    expect(table.childNodes.length).toBe(2);
    const tbody = table.childNodes[1];
    expect(tbody.nodeName).toBe('TBODY');
});

test('renders page table error', async () => {
    server.use(
        rest.get(config.pageListApi, (req, res, ctx) => {
            return res.once(
                ctx.status(404),
                ctx.json({ message: "bad request" })
            )
        })
    );

    const { findByText } = render(<PageTable />);
    const error = await findByText(/error/i);
    expect(error).toBeInTheDocument();
});