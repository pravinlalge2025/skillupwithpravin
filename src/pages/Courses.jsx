import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Courses = () => {
  const courses = [
    {
      title: "Full Stack .NET Developer",
      description:
        "Master C#, ASP.NET Core, and Entity Framework to build robust enterprise applications.",
    },
    {
      title: "React Frontend Development",
      description:
        "Learn React, hooks, and state management to create high-performance modern web apps.",
    },
    {
      title: "SQL Server & Database Design",
      description:
        "Gain expertise in SQL Server, database normalization, and complex queries.",
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center text-primary mb-5 fw-bold">Our Courses</h1>
      <Row>
        {courses.map((course, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-bold text-dark">
                  {course.title}
                </Card.Title>
                <Card.Text className="text-muted">
                  {course.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
