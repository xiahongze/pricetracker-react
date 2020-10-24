import React from 'react';
import { Form } from 'react-bootstrap';
import GenericForm from "./GenericForm";

class ConfigForm extends GenericForm {
    constructor(props) {
        const fetch = (id) => {
            return {
                "id": 1,
                "name": "Coles",
                "xpath": "//span/strong[@class=\"product-price\"] | //*[@id=\"main-content-inside\"]/div[2]/div/header/div[3]/div/span[1]",
                "active": true
            };
        }
        super(props, fetch, (id, obj) => console.log(id));
    }

    render() {
        const formBody = <div>
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
        </div>
        return this.makeForm(formBody);
    }
}

export default ConfigForm;