import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import ConfigTable from "./components/ConfigTable";
import ConfigForm from "./components/ConfigForm";
import PageForm from "./components/PageForm";
import PageTable from "./components/PageTable";
// import logo from './logo.svg';
import PriceTable from "./components/PriceTable";

function App() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Pricetracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/prices">Prices</Nav.Link>
            <Nav.Link href="/pages">Pages</Nav.Link>
            <Nav.Link href="/configs">Configs</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* <div className="App"> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* </div> */}
      <Router>
        <Switch>
          <Route exact path="/prices/:id" component={PriceTable}>
          </Route>
        </Switch>

        <Switch>
          <Route strict exact path="/pages" component={PageTable}>
          </Route>
        </Switch>
        <Switch>
          <Route strict exact path="/pages/:id" component={PageForm}>
          </Route>
        </Switch>

        <Switch>
          <Route strict exact path="/configs" component={ConfigTable}>
          </Route>
        </Switch>
        <Switch>
          <Route strict exact path="/configs/:id" component={ConfigForm}>
          </Route>
        </Switch>
      </Router>
    </Container >
  );
}

export default App;
