import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

export default function Menu() {
  const [nameFilm, setNameFilm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/film/search-films?name=${nameFilm}`);
      console.log(response.data);
    } catch (error) {
      console.error('Error searching films:', error);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
        <img style={{height:60,width:80}}src='data:image/png;base64,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'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={nameFilm} 
              onChange={(e) => setNameFilm(e.target.value)} 
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
