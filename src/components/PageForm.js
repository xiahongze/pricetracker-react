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

    /**
     * 
     * @param {Object} opts
     * @param {String} opts.label
     * @param {String} opts.propName
     * @param {Boolean} opts.asCol
     * @param {Boolean} opts.onChange
     * @param {Boolean} opts.disabled
     * @param {String} opts.formType
     */
    makeFormGroup({ label, propName, asCol = true, onChange = true, disabled = false, formType = "text" } = {}) {
        const col = asCol ? Col : "div";
        const onChangeFunc = onChange ? this.handleInputChange : null;
        const inputField = formType != 'checkbox' ? <Form.Control
            type={formType} name={propName} disabled={disabled} placeholder={label}
            value={this.state[propName]} onChange={onChangeFunc} /> : <Form.Check
                type="checkbox" name={propName} checked={this.state[propName]}
                onChange={onChangeFunc} />;
        return <Form.Group as={col} key={label + propName}>
            <Form.Label>{label}</Form.Label>
            {inputField}
        </Form.Group>
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
        this.makeFormGroup = this.makeFormGroup.bind(this);
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

                    <br />
                    {/* text fields */}
                    {
                        [
                            { label: 'Name', propName: 'name', asCol: false },
                            { label: 'URL', propName: 'url', asCol: false },
                        ].map(this.makeFormGroup)
                    }
                    <br />
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