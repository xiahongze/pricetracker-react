import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import utils from "../utils";

class PageForm extends React.Component {

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
        this.handleInputChange = utils.handleInputChange.bind(this);
        this.handleSubmit = utils.handleSubmit.bind(this);
        this.handleReset = utils.handleReset.bind(this);
        this.makeFormGroup = utils.makeFormGroup.bind(this);
    }

    render() {

        return (
            <Container>
                <h1> {this.state.id + ""} </h1>
                <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    {/* Display only properties */}
                    <Form.Row>
                        {
                            [
                                { label: 'Page ID', propName: 'id', disabled: true, onChange: false },
                                { label: 'User ID', propName: 'user_id', disabled: true, onChange: false },
                                { label: 'Retry', propName: 'retry', disabled: true, onChange: false },
                            ].map(this.makeFormGroup)
                        }
                    </Form.Row>

                    <Form.Row>
                        {
                            [
                                { label: 'Created Time', propName: 'created_time', disabled: true, onChange: false },
                                { label: 'Next Check', propName: 'next_check', disabled: true, onChange: false },
                            ].map(this.makeFormGroup)
                        }
                    </Form.Row>
                    {/* text fields */}
                    {
                        [
                            { label: 'Name', propName: 'name', asCol: false },
                            { label: 'URL', propName: 'url', asCol: false },
                        ].map(this.makeFormGroup)
                    }
                    {/* other fields */}
                    <Form.Row>
                        {this.makeFormGroup({ label: "Frequency", propName: "freq", formType: "number" })}
                        <Form.Group as={Col}>
                            <Form.Label>Config</Form.Label>
                            <Form.Control as="select" name="config_id" onChange={this.handleInputChange} value={this.state.config_id}>
                                {
                                    [1, 2, 3, 4, 5].map(i => <option key={i}>{i}</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                        {this.makeFormGroup({ label: "Active?", propName: "active", formType: "checkbox" })}
                    </Form.Row>

                    <Button variant="primary" type="submit">Submit</Button>
                    {' '/* add some whitespace */}
                    <Button variant="secondary" type="reset">Reset</Button>
                </Form>
            </Container>
        )
    }
}

export default PageForm;