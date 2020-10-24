import React from 'react';
import { Form, Col } from 'react-bootstrap';

/**
 * 
 * @param {String} string 
 * @param {Number} maxLength 
 */
function truncate(string, maxLength) {
    if (string.length <= maxLength) {
        return string;
    }
    return string.slice(0, maxLength) + "...";
}

function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
        [name]: value
    });
}

function handleSubmit(event) {
    alert('Your state is: ' + JSON.stringify(this.state));
    event.preventDefault();
}

function handleReset(event) {
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
function makeFormGroup({ label, propName, asCol = true, onChange = true, disabled = false, formType = "text" } = {}) {
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

export default {
    truncate: truncate,
    handleInputChange: handleInputChange,
    handleSubmit: handleSubmit,
    handleReset: handleReset,
    makeFormGroup: makeFormGroup,
};