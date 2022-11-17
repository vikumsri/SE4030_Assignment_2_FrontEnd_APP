import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.scss";

function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{fontSize:'30px'}}>ABC COMPANY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/sendmessage">Send Message</Nav.Link>
            <Nav.Link href="/uploadFile">Upload Files</Nav.Link>
            <Nav.Link href="/adminHome">Admin Mode</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;