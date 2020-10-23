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
     * @param {String} label
     * @param {String} propName
     * @param {Boolean} asCol
     * @param {Boolean} onChange
     * @param {Boolean} disabled
     * @param {String} formType
     */
    makeFormGroup(label, propName, asCol, onChange, disabled, formType = "text") {
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
                                ['Page ID', 'id', true, false, true],
                                ['User ID', 'user_id', true, false, true],
                                ['Retry', 'retry', true, false, true]
                            ].map(params => this.makeFormGroup(...params))
                        }
                    </Form.Row>

                    <Form.Row>
                        {
                            [
                                ['Created Time', 'created_time', true, false, true],
                                ['Next Check', 'next_check', true, false, true],
                            ].map(params => this.makeFormGroup(...params))
                        }
                    </Form.Row>

                    <br />
                    {/* text fields */}
                    {
                        [
                            ['Name', 'name', false, true, false],
                            ['URL', 'url', false, true, false],
                        ].map(params => this.makeFormGroup(...params))
                    }
                    <br />
                    {/* other fields */}
                    <Form.Row>
                        {this.makeFormGroup("Frequency", "freq", true, true, false, "number")}
                        <Form.Group as={Col}>
                            <Form.Label>Config</Form.Label>
                            <Form.Control as="select" name="config_id" onChange={this.handleInputChange} value={this.state.config_id}>
                                {
                                    [1, 2, 3, 4, 5].map(i => <option key={i}>{i}</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                        {this.makeFormGroup("Active?", "active", true, true, false, "checkbox")}
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