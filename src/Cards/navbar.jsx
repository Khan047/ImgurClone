import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Popper from "./popper"


class Navbar1 extends Component {
  handleClick = () => this.props.onClick(this.props.index)

  render() {
    return (
        
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" ><p style={{color:"white",fontSize:"150%"}}>Bad Clone</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">New Post</Nav.Link> */}
            <Popper />
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
           
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar1;