import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import config from '../config';
import utils from "../utils";
import Nav from 'react-bootstrap/Nav'

function PageTable() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(config.pageListApi)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <Container>Error: {error.message}</Container>;
    } else if (!isLoaded) {
        return <Container>Loading...</Container>;
    } else {
        return <Container>
            <h1>Page List</h1>
            <Table striped bordered hover data-testid="page-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Next Check</th>
                        <th>Retries</th>
                        <th>Active?</th>
                        <th>Config ID</th>
                        <th>Prices</th>
                        {/* <th>Created Time</th> */}
                        {/* <th>Freq (hrs)</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(row => <tr key={row.id}>
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
                        </tr>)
                    }
                </tbody>
            </Table>
        </Container >
    }
}

export default PageTable;