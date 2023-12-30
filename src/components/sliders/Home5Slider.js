import { sliderProps } from "@/src/sliderProps";
import { Component } from "react";
import Slider from "react-slick";
export default class Home5Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    return (
      <section className="main-slider-area rel z-1">
        <Slider
          ref={(c) => (this.slider = c)}
          {...sliderProps.mainSlider}
          className="main-slider"
        >
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(assets/images/slider/slide1.jpg)",
              }}
            >
              <div className="container">
                <div className="slide-content">
                  <span className="sub-title">Web Development Company</span>
                  <h2>
                    <span>Crafting Digital</span>
                    <br /> Experiences with Code and Creativity
                  </h2>
                  <hr />
                  <div className="ratting-btns">
                    <div className="quyality-ratting">
                      <span>Quality Service</span>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <a href="contact" className="theme-btn style-two">
                      Get Started Now <i className="far fa-arrow-right" />
                    </a>
                    <a className="read-more" href="#work-process-five-area">
                      How We Works <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(assets/images/slider/slide2.jpg)",
              }}
            >
              <div className="container">
                <div className="slide-content">
                  <span className="sub-title">Graphic Designing Agency</span>
                  <h2>
                    <span>Visualizing Ideas,</span>
                    <br /> For Growth Your Dream Business
                  </h2>
                  <hr />
                  <div className="ratting-btns">
                    <div className="quyality-ratting">
                      <span>Quality Service</span>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <a href="contact" className="theme-btn style-two">
                      Get Started Now <i className="far fa-arrow-right" />
                    </a>
                    <a className="read-more" href="#work-process-five-area">
                      How We Works <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(assets/images/slider/slider3.jpg)",
              }}
            >
              <div className="container">
                <div className="slide-content">
                  <span className="sub-title">Digital Marketing Agency</span>
                  <h2>
                    <span>Elevating Brands,</span>
                    <br /> Digitally Connecting You
                  </h2>
                  <hr />
                  <div className="ratting-btns">
                    <div className="quyality-ratting">
                      <span>Quality Service</span>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <a href="contact" className="theme-btn style-two">
                      Get Started Now <i className="far fa-arrow-right" />
                    </a>
                    <a className="read-more" href="#work-process-five-area">
                      How We Works <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(assets/images/slider/slider4.jpg)",
              }}
            >
              <div className="container">
                <div className="slide-content">
                  <span className="sub-title">Database Management</span>
                  <h2>
                    <span>Empowering Insights</span>
                    <br /> through Data Mastery
                  </h2>
                  <hr />
                  <div className="ratting-btns">
                    <div className="quyality-ratting">
                      <span>Quality Service</span>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <a href="contact" className="theme-btn style-two">
                      Get Started Now <i className="far fa-arrow-right" />
                    </a>
                    <a className="read-more" href="#work-process-five-area">
                      How We Works <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="main-slider-controls">
          <div className="container">
            <div className="main-slider-arrows">
              <button className="main-slider-prev" onClick={this.previous}>
                <i className="fal fa-long-arrow-left" /> prev
              </button>
              <button className="main-slider-next" onClick={this.next}>
                next <i className="fal fa-long-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
