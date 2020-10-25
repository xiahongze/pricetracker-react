import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import config from '../config';
import utils from "../utils";
import { makeTable } from "./GenericTable";

function PageTable() {
    const Table = makeTable({
        name: 'config',
        headers: ['#', 'Name', 'URL', 'Next Check', 'Retries', 'Active?', 'Config ID', 'Prices'],
        makeRow: row => <tr key={row.id}>
            <td>{row.id}</td>
            <td><Nav.Link href={`/pages/${row.id}`}>{utils.truncate(row.name, config.maxNameLength)}</Nav.Link></td>
            <td><Nav.Link target="_blank" rel="noopener noreferrer" href={row.url}>Link</Nav.Link></td>
            <td>{row.next_check.slice(0, 19)}</td>
            <td>{row.retry}</td>
            <td>{row.active ? 'YES' : 'NO'}</td>
            <td><Nav.Link href={`/configs/${row.config_id}`}>{row.config_id}</Nav.Link></td>
            <td><Nav.Link href={`/prices/${row.id}`}>View</Nav.Link></td>
            {/* <td>{row.created_time.slice(0, 19)}</td> */}
            {/* <td>{row.freq}</td> */}
        </tr>,
        fetchData: fetch.bind(null, config.pageListApi)
    })

    return <Container>
        <h1>Page List</h1>
        <Table></Table>
    </Container>
}

export default PageTable;