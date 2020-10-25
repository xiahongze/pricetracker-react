import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

export function makeTable({ name, headers, makeRow, fetchData }) {
    return (props) => {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);

        // reference:
        // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
        useEffect(() => {
            let isMounted = true; // note this flag denote mount status

            fetchData()
                .then(res => res.json())
                .then(
                    (result) => {
                        if (isMounted) {
                            setIsLoaded(true);
                            setItems(result);
                        }
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
            return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
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