import Carousel1 from "../Assets/Carousel1.jpg"
import Carousel2 from "../Assets/Carousel2.jpg"
import Carousel3 from "../Assets/Carousel3.jpg"

function CarouselEx() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide container" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Carousel1} class="d-block w-100 h-100" alt="logo" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Travel worldwide</h5>
        <p>with our travel packages you can go anywhere in world</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Carousel2} class="d-block w-100 h-100" alt="logo" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Seasonal Packages</h5>
        <p>Seasonal Packages comes with special discounts, offers</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Carousel3} class="d-block w-100 h-100" alt="logo" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Adventurous Tours</h5>
        <p>Adventures for all age groups in your budget</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default CarouselEx;