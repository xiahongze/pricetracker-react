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
            // promise chaining, make sure that list of promises are converted
            // to a single promise with Promise.all
            const [page, prices] = await Promise.all([
                utils.get(config.pageApi, { idx: pageId }),
                utils.get(config.priceApi, { page_id: pageId })
            ]).then(resps => Promise.all(resps.map(resp => resp.json())));
            setPage(page);
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