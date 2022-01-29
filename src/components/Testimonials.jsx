import React from "react";

function Testimonials() {
    return(
        <div>
            <div className="testimonials-div">
            <p className="testimonials-heading">TESTIMONIALS</p>
            <p className="testimonials-heading-2">Satisfied Clients</p>
            <div id="carouselExampleControls" class="carousel slide testimonial" data-bs-ride="carousel">
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <p><i class="fas fa-quote-right fa-2x"></i></p>
                        <p className className="testimonial-desc">Beautiful & innovative projects, definitely recommend!</p>
                        <div>
                            <div className="testimonial-info-div"><img src="./images/image1.jpg" className="testimonials-image"></img></div>
                            <div className="testimonial-info-div info">
                                <span className="testimonial-name">Neelima</span>
                                <p>New Delhi, India</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <p><i class="fas fa-quote-right fa-2x"></i></p>
                        <p className="testimonial-desc">Amazing, high-quality assignment, scored an A+</p>
                        <div>
                            <div className="testimonial-info-div"><img src="./images/image1.jpg" className="testimonials-image"></img></div>
                            <div className="testimonial-info-div info">
                                <span className="testimonial-name">Sanskriti</span>
                                <p>New Delhi, India</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <p><i class="fas fa-quote-right fa-2x"></i></p>
                        <p className="testimonial-desc">Simple & elegant presentation, had a great experience working with them</p>
                        <div>
                            <div className="testimonial-info-div"><img src="./images/image1.jpg" className="testimonials-image"></img></div>
                            <div className="testimonial-info-div info">
                                <span className="testimonial-name">Sannchay</span>
                                <p>New Delhi, India</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <p><i class="fas fa-quote-right fa-2x"></i></p>
                        <p className="testimonial-desc">The file was awesome, got me a good grade too</p>
                        <div>
                            <div className="testimonial-info-div"><img src="./images/image1.jpg" className="testimonials-image"></img></div>
                            <div className="testimonial-info-div info">
                                <span className="testimonial-name">Ishaan</span>
                                <p>New Delhi, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <hr className="testimonial-hr"></hr>
        </div>
    );
}

export default Testimonials;