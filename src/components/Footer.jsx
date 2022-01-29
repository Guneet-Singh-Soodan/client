import React from "react";

function Footer() {
    return(
        <footer id="footer">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 co">
        <ul>
          <li class="links-header">QUICK LINKS</li>
          <li>> <a href="index.html">Home</a></li><a href="index.html">
          </a><li>> <a href="index.html"></a><a href="#features">Features</a></li>
          <li>> <a href="#stats">Stats</a></li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 co">
        <ul>
          <li class="links-header">CONTACT DETAILS</li>
          <li><i class="fas fa-envelope telephone"></i> loremipsum@gmail.com</li>
          <li><i class="fas fa-phone-alt telephone"></i> +911234567890</li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 co">
        <ul>
          <li class="social-icons"><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li class="social-icons"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li class="social-icons"><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li class="social-icons"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
    <p class="copyright">Copyright© 2021 All right reserved</p>
  </footer>
    );
}

export default Footer;