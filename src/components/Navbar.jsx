import React from 'react';

function Navbar() {
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light custom-style-navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src='./images/navbar-icon.png'></img> spirals</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fal fa-bars fa-2x"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;