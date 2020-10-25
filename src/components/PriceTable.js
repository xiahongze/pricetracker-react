import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import config from '../config';
import utils from "../utils";
import { makeTable } from "./GenericTable";

/**
 * 
 * @param {Object} props 
 * @param {Object} props.match
 * @param {Object} props.match.params
 * @param {String} props.match.params.pageId
 */
function PriceTable(props) {
    const pageId = props?.match?.params?.id || "-1";

    const Table = makeTable({
        name: 'price',
        headers: ['#', 'Price', 'Created Time'],
        makeRow: row => <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.price}</td>
            <td>{row.created_time}</td>
        </tr>,
        fetchData: utils.get.bind(null, config.priceApi, { page_id: pageId })
    });

    const [page, setPage] = useState({});
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let isMounted = true;
        utils.get(config.pageApi, { idx: pageId }).then(
            resp => resp.json()
        ).then((js) => {
            if (isMounted) {
                setIsLoaded(true);
                setPage(js);
            }
        }, (error) => {
            setIsLoaded(true);
            setError(error);
        });
        return () => { isMounted = false };
    }, [pageId]); // the deps are only about the things it needs

    if (error) {
        return <Container>Error: {error.message}</Container>;
    } else if (!isLoaded) {
        return <Container>Loading...</Container>;
    } else {
        return <Container>
            <h1>Prices for <a href={`/pages/${pageId}`}>{page.name}</a></h1>
            <Table></Table>
        </Container>
    }
}

export default PriceTable;