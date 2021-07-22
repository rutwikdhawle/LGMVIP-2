import React from 'react';
import './cards.css';
import {Button} from 'react-bootstrap';
import Card from "react-bootstrap/Card";
export default function Cards(props){
  return (
      <div className="cards">
        
        {props.cardData.map((person, index) => {
          return (
            <Card className="card_1" style={{width: "15rem"}}>
              <Card.Img variant="top" className="img_1" src={person.avatar} /> 
              <Card.Body>
                <Card.Text>
                  <ul>
                    <li>{person.first_name} {person.last_name}</li>
                    <li>{person.email}</li>
                    <Button variant="primary" id="btn">View</Button>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
        
        
      </div>
  );
}