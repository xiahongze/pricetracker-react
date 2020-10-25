import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

export function makeTable({ name, headers, makeRow, fetchData }) {
    return (props) => {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);

        useEffect(() => {
            fetchData()
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
            return <>Error: {error.message}</>;
        } else if (!isLoaded) {
            return <>Loading...</>;
        } else {
            return <>
                <Table striped bordered hover data-testid={`${name}-table`}>
                    <thead>
                        <tr>
                            {
                                headers.map(hr => <th key={hr}>{hr}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(makeRow)
                        }
                    </tbody>
                </Table>
            </>
        }
    }
}