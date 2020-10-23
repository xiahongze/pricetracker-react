import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function fetch_price(pageId) {
    return {
        pageName: 'Nasonex',
        rows: [
            { priceId: 1, price: '$27.99', createdTime: new Date().toLocaleString() }
        ]
    }
}

/**
 * 
 * @param {Object} props 
 * @param {Object} props.match
 * @param {Object} props.match.params
 * @param {String} props.match.params.pageId
 */
function PriceTable(props) {
    const pageId = props?.match?.params?.pageId || "-1";

    // const { pageId } = 0;
    const data = fetch_price(pageId)
    return <Container>
        <h1>Prices for {data.pageName} - Page id <Nav.Link href={`/pages/${pageId}`}>{pageId}</Nav.Link></h1>
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
                    data.rows.map(row => <tr key={row.priceId}>
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