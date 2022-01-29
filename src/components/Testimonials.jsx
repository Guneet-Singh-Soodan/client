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
                        <p className className="testimonial-desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <div>
                            <div className="testimonial-info-div"><img src="./images/image1.jpg" className="testimonials-image"></img></div>
                            <div className="testimonial-info-div info">
                                <span className="testimonial-name">Roger Scott</span>
                                <p>Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <p><i class="fas fa-quote-right fa-2x"></i></p>
                        <p className="testimonial-desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <div>
                            <div className="testimonial-info-div"><img src="./images/image1.jpg" className="testimonials-image"></img></div>
                            <div className="testimonial-info-div info">
                                <span className="testimonial-name">Roger Scott</span>
                                <p>Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <p><i class="fas fa-quote-right fa-2x"></i></p>
                        <p className="testimonial-desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <div>
                            <div className="testimonial-info-div"><img src="./images/image1.jpg" className="testimonials-image"></img></div>
                            <div className="testimonial-info-div info">
                                <span className="testimonial-name">Roger Scott</span>
                                <p>Marketing Manager</p>
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