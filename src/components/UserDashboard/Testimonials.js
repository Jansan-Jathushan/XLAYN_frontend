import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Albert Flores",
      role: "Web Designer",
      image: "https://i.ibb.co/YT8XgSc/testimonial1.jpg",
      rating: 4,
      text: "Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt.",
    },
    {
      name: "Jane Smith",
      role: "Graphic Designer",
      image: "https://i.ibb.co/qn7V9gL/testimonial2.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget eros finibus, posuere purus at, venenatis ipsum. Ut non nisi eu elit aliquet placerat.",
    },
    // Add more testimonials if needed
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
  className="testimonials-section py-5"
  style={{
    backgroundColor: "#131842",
    color: "#FBF6E2",
    width: "100vw",  // Ensure full width
    marginLeft: "calc(-50vw + 50%)",  // Ensure no space on the sides
  }}
>

      <Container fluid>
        <Row className="text-center mb-5">
          <Col>
            <h3 className="text-uppercase font-weight-bold" style={{ color: "#E68369" }}>
              Testimonials
            </h3>
            <h2 className="font-weight-bold">What Our Clients Say</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow" style={{ borderRadius: "10px" }}>
              <div className="d-flex align-items-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="rounded-circle mr-3"
                  style={{ width: "80px", height: "80px" }}
                />
                <div>
                  <h5 className="mb-0 font-weight-bold">{testimonials[currentTestimonial].name}</h5>
                  <small className="text-muted">{testimonials[currentTestimonial].role}</small>
                </div>
              </div>
              <Card.Body>
                <p className="mt-3">
                  <FontAwesomeIcon icon={faQuoteRight} size="lg" color="#E68369" className="mr-2" />
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="d-flex justify-content-start mt-3">
                  {[...Array(5)].map((star, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      color={index < testimonials[currentTestimonial].rating ? "#E68369" : "#d3d3d3"}
                      className="mr-1"
                    />
                  ))}
                </div>
              </Card.Body>
            </Card>
            <div className="d-flex justify-content-center mt-4">
              <Button variant="link" onClick={handlePrevious} className="text-white mx-2">
                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
              </Button>
              <Button variant="link" onClick={handleNext} className="text-white mx-2">
                <FontAwesomeIcon icon={faArrowRight} size="lg" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
