import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import utils from "../utils";

class ConfigForm extends React.Component {
    constructor(props) {
        super(props);
        const configId = props?.match?.params?.configId;
        this.originState = {
            "id": 1,
            "name": "Coles",
            "xpath": "//span/strong[@class=\"product-price\"] | //*[@id=\"main-content-inside\"]/div[2]/div/header/div[3]/div/span[1]",
            "active": true
        };
        this.state = this.originState;

        this.handleInputChange = utils.handleInputChange.bind(this);
        this.handleSubmit = utils.handleSubmit.bind(this);
        this.handleReset = utils.handleReset.bind(this);
        this.makeFormGroup = utils.makeFormGroup.bind(this);
    }

    render() {
        return <Container>
            <h1> {this.state.id + ""} </h1>
            <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                <Form.Row>
                    {
                        [
                            { label: 'Config ID', propName: 'id', disabled: true, onChange: false },
                            { label: 'Name', propName: 'name' },
                            { label: "Active?", propName: "active", formType: "checkbox" },
                        ].map(this.makeFormGroup)
                    }
                </Form.Row>
                {this.makeFormGroup({ label: "XPATH", propName: "xpath", asCol: false })}

                <Button variant="primary" type="submit">Submit</Button>
                {' '/* add some whitespace */}
                <Button variant="secondary" type="reset">Reset</Button>
            </Form>
        </Container>
    }
}

export default ConfigForm;