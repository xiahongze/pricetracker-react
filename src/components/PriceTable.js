import React from 'react';
import { Container } from 'react-bootstrap';
import config from '../config';
import utils from "../utils";
import { loadAndMount, makeTable } from "./GenericTable";

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

    const Header = loadAndMount({
        fetchData: utils.get.bind(null, config.pageApi, { idx: pageId }),
        makeComponent: (page) => <h1>Prices for <a href={`/pages/${pageId}`}>{page.name}</a></h1>,
        isItemList: false
    });

    return <Container>
        <Header></Header>
        <Table></Table>
    </Container>
}

export default PriceTable;