// src/pages/Internship.jsx
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Internship = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center mb-4">
        <Col md={8}>
          <h1 className="fw-bold text-primary">Internship Opportunities</h1>
          <p className="text-muted mt-3">
            <strong>SkillUpWithPravin</strong> offers hands-on internships for
            <strong> Diploma</strong>, <strong>BE</strong>, and other
            computer-related courses.  
            Learn the latest technologies, work on real projects, and enhance
            your career prospects.
          </p>
        </Col>
      </Row>

      <Row className="g-4 justify-content-center">
        {[
          {
            title: "Full Stack .NET",
            text: "Master backend and frontend development with .NET, React, and SQL Server.",
          },
          {
            title: "React Frontend",
            text: "Dive deep into modern UI development using React and Bootstrap.",
          },
          {
            title: "Database & SQL",
            text: "Learn advanced SQL, database design, and optimization techniques.",
          },
        ].map((course, idx) => (
          <Col md={4} key={idx}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-primary fw-bold">
                  {course.title}
                </Card.Title>
                <Card.Text className="text-muted">{course.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <Button variant="success" size="lg">
          Apply Now
        </Button>
      </div>
    </Container>
  );
};

export default Internship;
