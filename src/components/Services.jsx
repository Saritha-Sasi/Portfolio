import React from 'react';

const servicesData = [

    {
        title: "UI/UX Design & Prototyping",
        icon: "fa-laptop-code",
        details: [
            "User Interface (UI) Design for Web and Mobile Applications.",
            "Wireframing, prototyping, and user-centered design.",
            "Conversion of Figma/Adobe XD Designs into Functional Code.",
            "Accessibility Design (WCAG Compliance).",
            "Design System Implementation."
        ]
    },
    {
        title: "Graphic Design",
        icon: "fa-palette",
        details: [
            "Logo Designing (Unique and Professional Logos for Brands).",
            "Branding and Identity Design (Business Cards, Letterheads, etc.).",
            "Social Media Graphics and Banner Creation.",
            "Marketing Collateral Design (Flyers, Posters, Brochures)."
        ]
    },
    {
        title: "Frontend Development",
        icon: "fa-code",
        details: [
            "Modern, responsive Website Development (Desktop, Tablet, Mobile).",
            "Single-Page Application (SPA) Development.",
            "Custom Interactive UI Components.",
            "Cross-Browser Compatibility Optimization.",
            "Website Performance Optimization."
        ]
    },
    {
        title: "WordPress Development (Elementor & Divi)",
        icon: "fa-search",
        details: [
            "Custom WordPress websites using Elementor & Divi Builder.",
            "Fully responsive and SEO-optimized WordPress themes.",
            "WooCommerce integration for e-commerce websites."
        ]
    },
    {
        title: "E-commerce Website Creation",
        icon: "fa-search",
        details: [
            "Custom E-commerce Website Design and Development.",
            "Shopping Cart and Checkout System Designing.",
            "Mobile-Optimized and Responsive E-commerce Solutions.",
            "SEO-Friendly Product Listings.",
            "Ongoing Maintenance and Support for E-commerce Platforms."
        ]
    },
    {
        title: "Full Stack Development",
        icon: "fa-bullhorn",
        details: [
            "End-to-End Web Application Development (Frontend and Backend).",
            "Responsive and Interactive Frontend Development using React.js, HTML5, CSS3, and JavaScript.",
            "Backend Development with Node.js and Express.js.",
            "Database Design and Management using MongoDB."
        ]
    }
];

const Services = () => {
    return (
        <section className="service section" id="services">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div className="service-item padd-15" key={index}>
                            <div className="service-item-inner">
                                <div className="icon">
                                    <i className={`fa ${service.icon}`} aria-hidden="true"></i>
                                </div>
                                <h4>{service.title}</h4>
                                <ul>
                                    {service.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
