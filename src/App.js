import logo from "./logo.svg";
import "./App.css";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
   return (
      <div>
         <Container>
            <Row>
               <Col md={4}>
                  Friends
                  <ListGroup as="ol" numbered>
                     <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                     <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                     <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                  </ListGroup>
               </Col>
               <Col className="vh-100" md={8}>
                  Chat
                  <Row className="h-75">Chat space</Row>
                  <Row className="h-25">Chat box</Row>
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default App;
