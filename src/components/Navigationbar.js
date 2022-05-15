
import { Navbar, Container, Nav, InputGroup, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigationbar(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "#fc035e"}}>
                <Container >
                <Navbar.Brand as={NavLink} to="/" style={{fontWeight: "700", letterSpacing: "5px"}}>GAN BAKERY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div className="location">
                            <input aria-label="Amount (to the nearest dollar)" placeholder="Location" />
                            <span><i className="fa fa-search" aria-hidden="true"></i></span>
                        </div>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/favorites">
                            <i className="fa fa-heart fa-fw" aria-hidden="true"></i> Favorites
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/mycart">
                            <i className="fa fa-shopping-cart fa-fw" aria-hidden="true"></i> My Cart
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/logout">
                            <i className="fa fa-user fa-fw" aria-hidden="true"></i> Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar;