import React from 'react';
import { Button, Col, Container, Form, Badge } from 'react-bootstrap';

class GenericForm extends React.Component {
    async updateState(resp) {
        if (resp.ok) {
            const js = await resp.json()
            this.setState(js);
            this.originState = js;
            this.setState({ isLoaded: true })
        } else {
            console.error(await resp.text());
            // TODO: display error somewhere
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        // remove isLoaded and id if it is 'new'
        const js = Object.assign({}, this.state,
            { isLoaded: undefined, id: this.state.id == 'new' ? undefined : this.state.id });
        console.log('About to submit: ' + JSON.stringify(js));
        const promise = this.state.id !== 'new' ? this.post(js) : this.put(js);
        await this.updateState(await promise);
        alert("Submitted!")
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleReset(event) {
        // alert('Your state is: ' + JSON.stringify(this.originState));
        // console.log(this.selectList)
        // this.selectList.forEach(console.log)
        event.preventDefault();
        this.setState(this.originState);
        alert("Reset!")
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
        const inputField = formType !== 'checkbox' ? <Form.Control
            type={formType} name={propName} disabled={disabled} placeholder={label}
            value={this.state[propName]} onChange={onChangeFunc} /> : <Form.Check
                type="checkbox" name={propName} checked={this.state[propName]}
                onChange={onChangeFunc} />;
        return <Form.Group as={col} key={label + propName}>
            <Form.Label>{label}</Form.Label>
            {inputField}
        </Form.Group>
    }

    constructor(props, fetch, post, put) {
        super(props);

        this.state = {};
        this.originState = this.state;

        this.fetch = fetch;
        this.post = post;
        this.put = put;

        this.updateState = this.updateState.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.makeFormBody = this.makeFormBody.bind(this);
        this.makeFormGroup = this.makeFormGroup.bind(this);
    }

    async componentDidMount() {
        // check if this is an edit or a new page
        const id = this.props?.match?.params?.id || 'new';
        if (id !== 'new') {
            const resp = await this.fetch(id);
            await this.updateState(resp);
        }
        this.setState({ isLoaded: true });
    }

    /**
     * this method needs to be overwritten by subclasses
     */
    makeFormBody() {
        return <></>
    }

    render() {
        if (!this.state.isLoaded) {
            return <></>;
        }
        return <Container>
            <h2><Badge variant="secondary">{this.state.id === "new" ? "New" : "Edit"}</Badge></h2>
            {this.makeFormBody()}
            <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                <Button variant="primary" type="submit">Submit</Button>
                {' '/* add some whitespace */}
                <Button variant="secondary" type="reset">Reset</Button>
            </Form>
        </Container>;
    }
}

export default GenericForm;