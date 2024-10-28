import React from 'react';
import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div>      
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Voyage Discover is a simple place for all your travel needs, you can go to any place any time without any issues.</p>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
            <li>Piligrimages</li>
            <li>HoneyMoon tours</li>
            <li>InterNational tours</li>
            <li>Domestic tours</li>
            <li>Adventurous tours</li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a>About Us</a></li>
              <li><a>Contact Us</a></li>
              <li><a>Contribute</a></li>
              <li><a>Privacy Policy</a></li>
              <li><a>Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by Voyage Discover
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><FaFacebook/></a></li>
              <li><a class="whatsapp" href="#"><FaWhatsapp/></a></li>
              <li><a class="instagram" href="#"><IoLogoInstagram/></a></li>
              <li><a class="linkedin" href="#"><FaLinkedin/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
      </div>
  );
}