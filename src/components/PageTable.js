import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import config from '../config';
import utils from "../utils";

function fetch_pages() {
    return [
        {
            "id": 1,
            "name": "Sunset Canola Oil",
            "url": "https://shop.coles.com.au/a/national/product/gold-sunset-canola-oil",
            "created_time": "2020-09-05T17:20:47.090837",
            "next_check": "2020-10-23T15:37:38.529417",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 1
        },
        {
            "id": 2,
            "name": "Vittoria Organic Espresso Coffee Beans",
            "url": "https://shop.coles.com.au/a/national/product/vittoria-organic-coffee-beans",
            "created_time": "2020-09-05T17:20:47.091332",
            "next_check": "2020-10-23T15:38:20.313793",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 1
        },
        {
            "id": 3,
            "name": "Lavazza Qualita Rossa Coffee Beans",
            "url": "https://shop.coles.com.au/a/national/product/lavazza-qualita-rossa-beans",
            "created_time": "2020-09-05T17:20:47.091577",
            "next_check": "2020-10-23T15:25:09.974378",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 1
        },
        {
            "id": 4,
            "name": "Grinders Rich Espresso Coffee Beans",
            "url": "https://shop.coles.com.au/a/national/product/grinders-rich-espresso-coffee-beans",
            "created_time": "2020-09-05T17:20:47.095228",
            "next_check": "2020-10-23T15:36:48.600150",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 1
        },
        {
            "id": 5,
            "name": "Gold'N Canola Oil",
            "url": "https://shop.coles.com.au/a/national/product/grinders-rich-espresso-coffee-beans",
            "created_time": "2020-09-05T17:20:47.095475",
            "next_check": "2020-10-23T15:24:52.475032",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 1
        },
        {
            "id": 6,
            "name": "Nasonex",
            "url": "https://www.chemistwarehouse.com.au/buy/78704/nasonex-allergy-280-dose",
            "created_time": "2020-09-05T17:20:47.095696",
            "next_check": "2020-10-23T15:37:15.414707",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 3
        },
        {
            "id": 7,
            "name": "Bioderma",
            "url": "https://www.chemistwarehouse.com.au/buy/81716/bioderma-sensibio-h20-solution-micellaire-500ml",
            "created_time": "2020-09-05T17:20:47.095907",
            "next_check": "2020-10-23T15:24:20.179873",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 3
        },
        {
            "id": 8,
            "name": "Refresh eye drops",
            "url": "https://www.chemistwarehouse.com.au/buy/42914/Refresh-Plus-Eye-Drop-0-4ml-30-Vials",
            "created_time": "2020-09-05T17:20:47.096108",
            "next_check": "2020-10-22T16:32:07.549000",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 3
        },
        {
            "id": 9,
            "name": "FESS Eucalyptus spray",
            "url": "https://www.chemistwarehouse.com.au/buy/63694/fess-eucalyptus-nasal-spray-30ml",
            "created_time": "2020-09-05T17:20:47.096294",
            "next_check": "2020-10-23T16:19:30.874168",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 3
        },
        {
            "id": 10,
            "name": "Braun Thermoscan 5 IRT",
            "url": "https://www.chemistwarehouse.com.au/buy/75254/braun-thermoscan-5-irt-6030",
            "created_time": "2020-09-05T17:20:47.096581",
            "next_check": "2020-10-23T15:13:33.123295",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 3
        },
        {
            "id": 11,
            "name": "Swiss Sleep",
            "url": "https://www.chemistwarehouse.com.au/buy/58108/Swisse-Ultiboost-Sleep-100-Tablets",
            "created_time": "2020-09-05T17:20:47.096811",
            "next_check": "2020-10-23T16:19:52.130475",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 3
        },
        {
            "id": 12,
            "name": "Campos 1KG Beans",
            "url": "https://www.woolworths.com.au/shop/productdetails/94138/campos-superior-coffee-beans",
            "created_time": "2020-09-07T07:46:16.699000",
            "next_check": "2020-10-23T15:13:50.170775",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 2
        },
        {
            "id": 13,
            "name": "Twining Lemon Ginger",
            "url": "https://shop.coles.com.au/a/alexandria/product/twinings-infusions-lemon-ginger",
            "created_time": "2020-09-11T15:59:14.940354",
            "next_check": "2020-10-23T16:20:09.744613",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 1
        },
        {
            "id": 14,
            "name": "Twining peppermint",
            "url": "https://shop.coles.com.au/a/alexandria/product/twinings-herbal-infusion-tea-bags-pure-peppermint",
            "created_time": "2020-09-11T15:59:43.541750",
            "next_check": "2020-10-23T15:38:03.168545",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 1
        },
        {
            "id": 15,
            "name": "Barista Express Coffee Machine Stainless Steel BES870BSS",
            "url": "https://www.myer.com.au/p/bes870-barista-express-coffee-machine-165916360",
            "created_time": "2020-09-21T14:34:56.845372",
            "next_check": "2020-10-22T16:42:30.420593",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 4
        },
        {
            "id": 16,
            "name": "delonghi magnifica s",
            "url": "https://www.jbhifi.com.au/products/delonghi-magnifica-fully-automatic-espresso-coffee-maker",
            "created_time": "2020-09-25T20:32:45.238397",
            "next_check": "2020-10-23T15:39:06.026294",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 5
        },
        {
            "id": 17,
            "name": "breville barista express s steel",
            "url": "https://www.jbhifi.com.au/products/breville-the-barista-express-s-steel",
            "created_time": "2020-09-25T20:40:58.901101",
            "next_check": "2020-10-23T15:38:53.157302",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 5
        },
        {
            "id": 18,
            "name": "breville barista express s steel",
            "url": "https://www.harveynorman.com.au/breville-barista-express-manual-coffee-machine-brushed-stainless-steel.html",
            "created_time": "2020-09-25T20:51:59.810288",
            "next_check": "2020-10-22T16:42:56.239408",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 6
        },
        {
            "id": 19,
            "name": "De'Longhi Magnifica S Coffee Machine",
            "url": "https://www.harveynorman.com.au/de-longhi-magnifica-s-coffee-machine.html",
            "created_time": "2020-09-25T20:52:41.389197",
            "next_check": "2020-10-22T16:42:43.265479",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 6
        }
    ]
}

function PageTable() {
    const data = fetch_pages()
    return <Container>
        <h1>Page List</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>URL</th>
                    {/* <th>Created Time</th> */}
                    <th>Next Check</th>
                    <th>Freq (hrs)</th>
                    <th>Retries</th>
                    <th>Active?</th>
                    <th>Config ID</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(row => <tr key={row.id}>
                        <td>{row.id}</td>
                        <td><Link to={`/pages/${row.id}`}>{utils.truncate_name(row.name)}</Link></td>
                        <td><a target="_blank" rel="noopener noreferrer" href={row.url}>Link</a></td>
                        {/* <td>{row.created_time.slice(0, 19)}</td> */}
                        <td>{row.next_check.slice(0, 19)}</td>
                        <td>{row.freq}</td>
                        <td>{row.retry}</td>
                        <td>{row.active ? 'YES' : 'NO'}</td>
                        <td><Link to={`/configs/${row.config_id}`}>{row.config_id}</Link></td>
                    </tr>)
                }
            </tbody>
        </Table>
    </Container >
}

export default PageTable;