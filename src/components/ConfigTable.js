import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import config from '../config';
import utils from "../utils";


function ConfigTable() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // const data = fetch_configs()
    useEffect(() => {
        fetch(config.configListApi)
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
            <h1>Config List</h1>
            <Table striped bordered hover data-testid="config-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>XPATH</th>
                        <th>Active?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(row => <tr key={row.id}>
                            <td>{row.id}</td>
                            <td><Nav.Link href={`/configs/${row.id}`}>{row.name}</Nav.Link></td>
                            <td>{utils.truncate(row.xpath, 40)}</td>
                            <td>{row.active ? 'YES' : 'NO'}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </Container >
    }
}

export default ConfigTable;