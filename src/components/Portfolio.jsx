import React from 'react';

const portfolioProjects = [
    { id: 1, image: "images/portfolio/Portfolio-1.png" },
    { id: 2, image: "images/portfolio/Portfolio-2.png" },
    { id: 3, image: "images/portfolio/Portfolio-3.png" },
    { id: 4, image: "images/portfolio/portfolio-4.jpg" },
    { id: 5, image: "images/portfolio/portfolio-5.jpg" },
    { id: 6, image: "images/portfolio/Portfolio-6.png" }
];

const Portfolio = () => {
    return (
        <div className="main-content">
            <section className="portfolio section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="portfolio-heading padd-15">
                            <h2>My Last Projects :</h2>
                        </div>
                    </div>
                    <div className="row">
                        {portfolioProjects.map((project) => (
                            <div className="portfolio-item padd-15" key={project.id}>
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={project.image} alt={`Portfolio ${project.id}`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
