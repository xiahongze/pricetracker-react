import React from 'react';
import { Table } from 'react-bootstrap';
import { fetchAndDisplay } from './fetchAndDisplay';

export function makeTable({ name, headers, makeRow, fetchData }) {
    const makeComponent = (items) => <Table striped bordered hover data-testid={`${name}-table`}>
        <thead>
            <tr>{headers.map(hr => <th key={hr}>{hr}</th>)}</tr>
        </thead>
        <tbody>{items.map(makeRow)}</tbody>
    </Table>
    return fetchAndDisplay({ fetchData: fetchData, makeComponent: makeComponent, isItemList: true });
}