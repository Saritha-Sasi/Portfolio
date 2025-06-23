import React, { useEffect } from 'react'
import Typed from 'typed.js';

const Home = () => {

    useEffect(() => {
        const options = {
            strings: ["Web Designer", "Wordpress Designer", "Web Developer", "Frontend Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        };

        const typed = new Typed(".typed", options);
        return () => {
            typed.destroy();
        };
    }, []);
    
    return (
        <>
            <div className="main-content">
                <section className="home section active" id="home">
                    <div className="container">
                        <div className="row">
                            <div className="home-info padd-15">
                                <h3 className="hello">Hello my name is <span className="name">Saritha Sasidharan</span></h3>
                                <h3 className="my-profession">I'm a <span className="typed">Wordpress/ UI Developer</span></h3>
                                <p>Creative and detail-oriented Frontend Developer with 8 years of experience in
                                    designing and developing responsive, user-centered web applications... </p>
                                <a href="./UI Developer.pdf" target="_blank" className="btn ">Download CV</a>
                            </div>
                            {/* <div className="home-img padd-15">
                                <img src="/images/hero.jpg" alt="" />
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
