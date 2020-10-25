import React from 'react';
import { Form } from 'react-bootstrap';
import config from "../config";
import utils from "../utils";
import GenericForm from "./GenericForm";

class ConfigForm extends GenericForm {
    state = {
        "id": "new",
        "name": "Name",
        "xpath": "XPATH",
        "active": true
    }

    constructor(props) {
        const fetch = async (id) => utils.get(config.configApi, { idx: id });

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