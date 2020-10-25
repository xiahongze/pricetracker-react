import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import config from '../config';
import utils from "../utils";

/**
 * 
 * @param {Object} props 
 * @param {Object} props.match
 * @param {Object} props.match.params
 * @param {String} props.match.params.pageId
 */
function PriceTable(props) {
    const pageId = props?.match?.params?.id || "-1";
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [page, setPage] = useState({});
    const updateFunc = async () => {
        try {
            const pageResp = await utils.get(config.pageApi, { idx: pageId });
            const priceResp = await utils.get(config.priceApi, { page_id: pageId });
            const page = await pageResp.json();
            setPage(page);
            const prices = await priceResp.json();
            setItems(prices);
            setIsLoaded(true);
        } catch (error) {
            setIsLoaded(true);
            setError(error);
        }
    };

    useEffect(() => {
        updateFunc();
    }, []); // the deps is an empty list as we only need to load it once

    if (error) {
        return <Container>Error: {error.message}</Container>;
    } else if (!isLoaded) {
        return <Container>Loading...</Container>;
    } else {
        return <Container>
            <h1>Prices for <a href={`/pages/${pageId}`}>{page.name}</a></h1>
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
                        items.map(row => <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.price}</td>
                            <td>{row.created_time}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </Container>
    }
}

export default PriceTable;