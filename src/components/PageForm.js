import React from 'react';
import { Button, Container, Form, Col } from 'react-bootstrap';

class PageForm extends React.Component {
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('Your state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleReset(event) {
        // alert('Your state is: ' + JSON.stringify(this.originState));
        // console.log(this.selectList)
        // this.selectList.forEach(console.log)
        event.preventDefault();
        this.setState(this.originState);
    }

    constructor(props) {
        super(props);
        const pageId = this.props?.match?.params?.pageId;
        this.originState = {
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
        };
        this.state = this.originState;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    render() {

        return (
            <Container>
                <h1> {this.state.id + ""} </h1>
                <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    {/* Display only properties */}
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Page ID</Form.Label>
                            <Form.Control placeholder="" disabled value={this.state.id} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>User ID</Form.Label>
                            <Form.Control placeholder="" disabled value={this.state.user_id} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Retry</Form.Label>
                            <Form.Control name="retry" disabled value={this.state.retry} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Created Time</Form.Label>
                            <Form.Control placeholder="" disabled value={this.state.created_time} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Next Check</Form.Label>
                            <Form.Control placeholder="" disabled value={this.state.next_check} />
                        </Form.Group>
                    </Form.Row>

                    <br />
                    {/* text fields */}
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>URL</Form.Label>
                        <Form.Control type="text" name="url" placeholder="URL" value={this.state.url} onChange={this.handleInputChange} />
                    </Form.Group>
                    <br />
                    {/* other fields */}
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Frequency</Form.Label>
                            <Form.Control type="number" name="freq" placeholder="24" value={this.state.freq} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Config</Form.Label>
                            <Form.Control as="select" name="config_id" onChange={this.handleInputChange} value={this.state.config_id}>
                                {
                                    [1, 2, 3, 4, 5].map(i => <option key={i}>{i}</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Check type="checkbox" name="active" label="Active?" checked={this.state.active} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form.Row>

                    {/* <Form.Row> */}
                    <Button variant="primary" type="submit">Submit</Button>
                    {/* add some whitespace */}
                    {' '}
                    <Button variant="secondary" type="reset">Reset</Button>
                    {/* </Form.Row> */}
                </Form>
            </Container>
        )
    }
}

export default PageForm;