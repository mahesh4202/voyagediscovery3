import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Assets/voyage discover.png"
import HeaderAvatar from "./HeaderAvatar";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-success" style={{backgroundColor: "#1100ff"}}>
      <Container fluid>
      <img src={Logo} alt="Logo" height={80} width={100}/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px"}} navbarScroll >
            <Nav.Link href="#action1" style={{color: "#FFFFFF" , fontSize: "20px", fontWeight: "bold" }}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color: "#FFFFFF" , fontSize: "20px", fontWeight: "bold" }}>Destinations</Nav.Link>
            <Nav.Link href="#action2" style={{color: "#FFFFFF" , fontSize: "20px", fontWeight: "bold" }}>Experiences</Nav.Link>
            <Nav.Link href="#action2" style={{color: "#FFFFFF" , fontSize: "20px", fontWeight: "bold" }}>Inspirations</Nav.Link>
            <Nav.Link href="#action2" style={{color: "#FFFFFF" , fontSize: "20px", fontWeight: "bold" }}>About Us</Nav.Link>
          </Nav>
          <Form className="d-flex me-2">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button type="button" class="btn btn-info">Search</Button>
          </Form>
          <HeaderAvatar/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;