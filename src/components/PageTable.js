import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import config from '../config';
import utils from "../utils";
import { makeTable } from "./GenericTable";

const Table = makeTable({
    name: 'page',
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
    fetchData: utils.get.bind(null, config.pageListApi)
});

function PageTable() {
    return <Container>
        <Row>
            <Col><h1>Page List</h1></Col>
            <Col className="text-right"><h1><Button variant="primary" href="/pages/new">NEW</Button></h1></Col>
        </Row>
        <Table></Table>
    </Container>;
}

export default PageTable;