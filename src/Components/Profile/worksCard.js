//import React, { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';

export default function WorksCard(props) {
return (
  <Card style={{ alignSelf: 'center', color: 'black', border: 'none', borderRadius: '8px', width: '60%', margin: "2.8em auto" }}>
              <Card.Img variant="top" src={props.cardPhoto} style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '1.2em' }}>{props.cardTitle}</Card.Title>
                <Card.Text>
                  {props.cardText}
                </Card.Text>
              </Card.Body>
            </Card>
)
}

