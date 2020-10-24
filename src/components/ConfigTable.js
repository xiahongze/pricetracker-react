import React from 'react';
import { Container, Table } from 'react-bootstrap';
import config from '../config';
import utils from "../utils";
import Nav from 'react-bootstrap/Nav'

function fetch_configs() {
    return [
        {
            "id": 1,
            "name": "Coles",
            "xpath": "//span/strong[@class=\"product-price\"] | //*[@id=\"main-content-inside\"]/div[2]/div/header/div[3]/div/span[1]",
            "active": true
        },
        {
            "id": 2,
            "name": "Woolies",
            "xpath": "//div[@class=\"price price--large\"] | //div[@class=\"price price--large ng-star-inserted\"]",
            "active": true
        },
        {
            "id": 3,
            "name": "Chemist",
            "xpath": "//span[@class=\"product__price\"] | //div[@class=\"product__price\"] | //div[@class=\"Price\"]",
            "active": true
        },
        {
            "id": 4,
            "name": "Myer",
            "xpath": "//p[@data-automation=\"product-price-now\"]",
            "active": true
        },
        {
            "id": 5,
            "name": "JB HiFi",
            "xpath": "//span[@class=\"price\"]",
            "active": true
        },
        {
            "id": 6,
            "name": "Harvey Norman",
            "xpath": "//form//span[@class=\"price\"]",
            "active": true
        }
    ]
}

function PageTable() {
    const data = fetch_configs()
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
                    data.map(row => <tr key={row.id}>
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

export default PageTable;