import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';

class GenericForm extends React.Component {
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
        this.post();
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

    constructor(props, fetch, post) {
        super(props);
        const id = props?.match?.params?.id; // use it to 
        this.originState = fetch(id);
        this.state = this.originState;
        this.post = post;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.makeForm = this.makeForm.bind(this);
        this.makeFormGroup = this.makeFormGroup.bind(this);
    }

    makeForm(formBody) {
        return <Container>
            <h1> {this.state.id + ""} </h1>
            {formBody}
            <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                <Button variant="primary" type="submit">Submit</Button>
                {' '/* add some whitespace */}
                <Button variant="secondary" type="reset">Reset</Button>
            </Form>
        </Container>
    }
}

export default GenericForm;