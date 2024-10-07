import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/UserDashboard/AboutUs.css'
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <section className="position-relative mb-4">
        <img
          src="/placeholder.svg?height=400&width=1200"
          alt="XLAYN Dry Fish"
          className="img-fluid rounded"
          style={{ height: "400px", width: "100%", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50 d-flex align-items-center justify-content-center">
          <h1 className="text-white display-4">About XLAYN</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mb-4">
        <h2 className="h3 mb-3">About XLAYN</h2>
        <p className="lead">
          XLAYN is a pioneering platform dedicated to exporting high-quality dry fish globally. We bridge the gap between
          trusted suppliers and discerning customers, ensuring the finest products reach your table.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="mb-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Our Mission</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Our mission is to provide the best quality dry fish to customers worldwide, ensuring sustainability and
                  exceptional service in every transaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Our Vision</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  We envision a future where every household can access premium dry fish products, supporting local suppliers
                  and promoting sustainable fishing practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History/Story */}
      <section className="mb-4">
        <h2 className="h3 mb-3">Our Story</h2>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h3 className="h4">Company Origin</h3>
            <p>
              Founded in [Year] by [Your Name/Founders' Names], XLAYN was born out of a passion for high-quality seafood and
              a desire to connect local suppliers with international markets. Inspired by [Personal Story or Experience], we
              embarked on this journey to offer customers the best dry fish products.
            </p>
            <h3 className="h4">Growth Journey</h3>
            <p>
              Since our inception, we have [mention any significant milestones, such as expanding your supplier network,
              entering new markets, or any awards/recognitions]. Our commitment to quality and service has fueled our growth
              and success.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="XLAYN History"
              className="img-fluid rounded"
              style={{ height: "300px", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mb-4">
        <h2 className="h3 mb-3">Meet the Team</h2>
        <div className="row">
          {[
            { name: "John Doe", role: "Founder & CEO", bio: "With over 15 years of experience in the seafood industry, John is passionate about quality and sustainability." },
            { name: "Jane Smith", role: "Operations Manager", bio: "Focused on ensuring seamless operations, Jane manages our supplier relationships and product quality assurance." },
            { name: "Mike Johnson", role: "Marketing Director", bio: "Mike brings creative strategies to showcase our products and connect with customers worldwide." }
          ].map((member, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={`/placeholder.svg?height=200&width=200&text=${member.name}`}
                  alt={member.name}
                  className="card-img-top rounded-circle mx-auto"
                  style={{ width: "200px", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                  <p className="card-text">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-4">
        <h2 className="h3 mb-3">Our Values</h2>
        <div className="row">
          {[
            { value: "Quality", description: "We source only the best products to ensure customer satisfaction." },
            { value: "Sustainability", description: "Committed to responsible fishing practices that protect marine life." },
            { value: "Customer Satisfaction", description: "We prioritize our customers' needs, striving for excellence in service." }
          ].map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title text-center">{item.value}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text text-center">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnerships */}
      <section className="mb-4">
        <h2 className="h3 mb-3">Our Partnerships</h2>
        <p className="mb-3">
          We collaborate with trusted suppliers who share our commitment to quality and sustainability, ensuring that our
          customers receive the best products available.
        </p>
        <p className="mb-4">XLAYN is proud to partner with [mention any notable businesses or organizations], further enhancing our product offerings.</p>
        <div className="d-flex justify-content-center flex-wrap">
          {[1, 2, 3, 4].map((partner) => (
            <img
              key={partner}
              src={`/placeholder.svg?height=100&width=100&text=Partner ${partner}`}
              alt={`Partner ${partner}`}
              className="img-fluid rounded m-2"
              style={{ height: "100px", width: "100px", objectFit: "cover" }}
            />
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="mb-4">
        <h2 className="h3 mb-3">Get in Touch</h2>
        <p className="mb-3">We'd love to hear from you! For inquiries or more information, please contact us at:</p>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>Email: your-email@xlayn.com</p>
            <p>Phone: Your Phone Number</p>
            <div className="d-flex mt-3">
              <a href="#" className="text-primary me-3">
                <Facebook className="h6 w-6" />
              </a>
              <a href="#" className="text-info me-3">
                <Twitter className="h6 w-6" />
              </a>
              <a href="#" className="text-danger me-3">
                <Instagram className="h6 w-6" />
              </a>
              <a href="#" className="text-primary">
                <Linkedin className="h6 w-6" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/placeholder.svg?height=300&width=400&text=Contact Us"
              alt="Contact XLAYN"
              className="img-fluid rounded"
              style={{ height: "300px", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
