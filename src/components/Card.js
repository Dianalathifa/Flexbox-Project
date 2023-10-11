import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Gambar from '../assets/Logo.png';

function ContohCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Gambar} />
        <Card.Body>
          <Card.Title>MelodyMasterClass Platform</Card.Title>
          <Card.Text>
            Let's learn music together!
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContohCard;
