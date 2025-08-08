// src/pages/Workshop.jsx

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const guestLectures = [
  {
    college: 'Sinhgad Institute of Technology, Pune',
    topic: 'Full Stack .NET Workshop',
    date: 'March 15, 2025',
  },
  {
    college: 'MIT Academy of Engineering, Alandi',
    topic: 'React JS Deep Dive',
    date: 'February 22, 2025',
  },
  {
    college: 'DY Patil Institute, Pimpri',
    topic: 'SQL Server for Developers',
    date: 'January 10, 2025',
  },
  {
    college: 'Zeal Education Society, Narhe',
    topic: 'Internship Orientation & Resume Building',
    date: 'December 12, 2024',
  },
];

const technologies = [
  {
    name: '.NET Full Stack',
    description: 'Covered ASP.NET Core, Web API, Entity Framework, and deployment.',
    image: '/images/dotnet.png',
  },
  {
    name: 'React JS',
    description: 'Discussed hooks, routing, state management, and component design.',
    image: '/images/react.png',
  },
  {
    name: 'SQL Server',
    description: 'Explained data modeling, stored procedures, and database optimization.',
    image: '/images/sqlserver.png',
  },
  {
    name: 'Resume & Interview Skills',
    description: 'Guided students on resume building, mock interviews, and LinkedIn profile.',
    image: '/images/resume.png',
  },
];

const Workshop = () => {
  return (
    <Container className="py-4">
      {/* Guest Lectures */}
      <h2 className="mb-4 text-center text-primary fw-bold">Guest Lectures & Workshops</h2>
      <Row xs={1} md={2} lg={2} className="g-4 mb-5">
        {guestLectures.map((lecture, index) => (
          <Col key={index}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="text-secondary">{lecture.college}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{lecture.topic}</Card.Subtitle>
                <Card.Text><strong>Date:</strong> {lecture.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Technologies Covered */}
      <h2 className="mb-4 text-center text-success fw-bold">Technologies Covered</h2>
      <Row xs={1} md={2} lg={2} className="g-4">
        {technologies.map((tech, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={tech.image}
                alt={tech.name}
                style={{ height: '150px', objectFit: 'contain', padding: '20px' }}
              />
              <Card.Body>
                <Card.Title className="text-dark">{tech.name}</Card.Title>
                <Card.Text>{tech.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Workshop;
