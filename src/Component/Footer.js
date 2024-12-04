import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-center text-md-start'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Voyage Discover
              </h6>
              <p>Voyage Discover is a simple place for all your travel needs, you can go to any place any time without any issues.</p>
            </MDBCol>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Piligrimages</h6>
              <p>
                <a href='#!' className='text-reset'>
                  HoneyMoon tours
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  InterNational tours
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Domestic tours
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Adventurous tours
                </a>
              </p>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contribute
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sitemap
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='#'>
          voyagediscover.com
        </a>
      </div>
    </MDBFooter>
  );
}