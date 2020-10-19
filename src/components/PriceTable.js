import React from 'react';
import { Container, Table } from 'react-bootstrap';

function PriceTable(props) {
    return <Container>
        <h1>Prices for {props.pageName} - id {props.pageId}</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Price</th>
                    <th>Created Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.rows.map(row => <tr>
                        <td>{row.priceId}</td>
                        <td>{row.price}</td>
                        <td>{row.createdTime}</td>
                    </tr>)
                }
            </tbody>
        </Table>
    </Container>
}

export default PriceTable;