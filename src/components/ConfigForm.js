import React, { useState } from 'react';
import { Button, Container, Form, Col } from 'react-bootstrap';


function ConfigForm(props) {
    const configId = this.props?.match?.params?.configId;
    this.originState = {
        "id": 1,
        "name": "Coles",
        "xpath": "//span/strong[@class=\"product-price\"] | //*[@id=\"main-content-inside\"]/div[2]/div/header/div[3]/div/span[1]",
        "active": true
    }
    const [form, setForm] = useState(this.originState);
    return <div></div>
}

export default ConfigForm;