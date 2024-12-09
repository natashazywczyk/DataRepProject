//Navigation Bar appears at the top of page
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Navigation = () => {

    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        const savedDarkTheme = localStorage.getItem('theme');
        if (savedDarkTheme) 
        {
            setDarkTheme(savedDarkTheme == 'dark');
        }
    }, []);

    const lightOrDark = () => {
        const newDarkTheme = !darkTheme;
        setDarkTheme(newDarkTheme);

        localStorage.setItem('theme', newDarkTheme ? 'dark' : 'light');
    };

    return (
        <div className={darkTheme ? 'bg-dark text-white' : 'bg-light text-dark'}>           
            <Navbar style={{backgroundColor: darkTheme ? '#323b30' : '#63916e'}} data-bs-theme={darkTheme ? 'dark' : 'light'} >
                <Container>
                    <Navbar.Brand href="/" style={{ color: darkTheme ? '#89a394' : '#a9dfbf' }}>
                        Bucket List
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/ideas">Ideas</Nav.Link>
                        <Nav.Link href="/additem">Add Wish</Nav.Link>
                        <Nav.Link href="/main">Main Page</Nav.Link>
                    </Nav>
                    <Button onClick={lightOrDark} variant={darkTheme ? 'light' : 'dark'}>
                        {darkTheme ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;