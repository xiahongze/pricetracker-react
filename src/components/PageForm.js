import React from 'react';
import { Col, Form } from 'react-bootstrap';
import GenericForm from "./GenericForm";

class PageForm extends GenericForm {

    constructor(props) {
        const fetch = (id) => ({
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
        });
        super(props, fetch, (id, obj) => console.log(id));
    }

    render() {
        const formBody = <div>
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
        </div>
        return this.makeForm(formBody);
    }
}

export default PageForm;