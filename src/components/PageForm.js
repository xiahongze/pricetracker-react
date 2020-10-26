import React from 'react';
import { Col, Form } from 'react-bootstrap';
import config from "../config";
import utils from "../utils";
import { fetchAndDisplay } from "./fetchAndDisplay";
import GenericForm from "./GenericForm";


class PageForm extends GenericForm {

    state = {
        "id": "new",
        "name": "",
        "url": "https://example.com",
        "created_time": "2020-09-05T17:20:47.090837",
        "next_check": "2020-10-23T15:37:38.529417",
        "freq": 24,
        "retry": 0,
        "active": true,
        "user_id": config.userId,
        "config_id": 1
    }

    constructor(props) {
        const fetch = async (id) => utils.get(config.pageApi, { idx: id });
        const post = utils.post.bind(null, config.pageApi);
        const put = utils.put.bind(null, config.pageApi);
        super(props, fetch, post, put);

        this.ConfigOptions = fetchAndDisplay({
            fetchData: utils.get.bind(null, config.configListApi),
            isItemList: true,
            makeComponent: items => <Form.Control as="select" name="config_id" onChange={this.handleInputChange} value={this.state.config_id}>
                {
                    items.map(it => <option key={it.id} value={it.id}>{`${it.id}. ${it.name}`}</option>)
                }
            </Form.Control>
        })
    }

    makeFormBody() {
        return <>
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
                    <this.ConfigOptions></this.ConfigOptions>
                </Form.Group>
                {this.makeFormGroup({ label: "Active?", propName: "active", formType: "checkbox" })}
            </Form.Row>
        </>;
    }
}

export default PageForm;