import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container, Form, FormControl, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ConfigForm from "./components/ConfigForm";
import ConfigTable from "./components/ConfigTable";
import PageForm from "./components/PageForm";
import PageTable from "./components/PageTable";
import PriceTable from "./components/PriceTable";

function App() {
  const routes = [
    { path: "/prices/:id", component: PriceTable },
    { path: "/pages", component: PageTable },
    { path: "/pages/:id", component: PageForm },
    { path: "/configs", component: ConfigTable },
    { path: "/configs/:id", component: ConfigForm },
  ]

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Pricetracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pages">Pages</Nav.Link>
            <Nav.Link href="/configs">Configs</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/">
            <Jumbotron>
              <h1>Hello, hard-working thrifty person!</h1>
              <p>Track the prices of your interesting goods, from groceries to any fancy consumer products!</p>
              <p><Button variant="primary" href="/pages">View Pages</Button></p>
            </Jumbotron>
          </Route>
        </Switch>

        {
          routes.map((r, i) => <Switch key={i}><Route strict exact path={r.path} component={r.component}></Route></Switch>)
        }
      </Router>
    </Container >
  );
}

export default App;
