import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import config from '../config';
import utils from "../utils";
import { makeTable } from "./GenericTable";

const Table = makeTable({
    name: 'config',
    headers: ['#', 'Name', 'XPATH', 'Active?'],
    makeRow: row => <tr key={row.id}>
        <td>{row.id}</td>
        <td><Nav.Link href={`/configs/${row.id}`}>{row.name}</Nav.Link></td>
        <td>{utils.truncate(row.xpath, 40)}</td>
        <td>{row.active ? 'YES' : 'NO'}</td>
    </tr>,
    fetchData: utils.get.bind(null, config.configListApi)
});

function ConfigTable() {
    return <Container>
        <h1>Config List</h1>
        <Table></Table>
    </Container>;
}

export default ConfigTable;