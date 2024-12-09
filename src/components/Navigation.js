//Navigation Bar appears at the top of page
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
    return (
        //Updates URL depending on what link the user clicks
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Bucket List</Navbar.Brand>
                <Nav className="me-auto">
                    {/*Different links*/}
                    <Nav.Link href="/ideas">Ideas</Nav.Link>
                    <Nav.Link href="/additem">Add Wish</Nav.Link>
                    <Nav.Link href="/main">Main Page</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;