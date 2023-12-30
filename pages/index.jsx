import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Home5Slider from "@/src/components/sliders/Home5Slider";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index2 = () => {
  return (
    <Layout header={5} footer={2}>
      {/* Hero Section Start */}
      <Home5Slider />
      {/* Hero Section End */}
      {/* Client Logo Two start */}
      <div className="client-logo-area pt-120 pb-90 rpt-100 rpb-70">
        <div className="container">
          <div className="client-logo-wrap">
            <Link
              className="client-logo-item wow fadeInUp delay-0-2s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo1.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-3s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo2.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-4s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo3.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-5s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo4.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-6s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo5.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-7s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo6.png"
                alt="Client Logo"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Client Logo Two end */}
      {/* Advertise Area Start */}
      <section className="advertise-banner-area rel z-1">
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div
                className="advertise-banner style-one bgc-primary"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/add-banner-bg.png)",
                }}
              >
                <div className="image">
                  <img src="assets/images/banner/add-banner.png" alt="Banner" />
                </div>
                <div className="content mt-20">
                  <span className="number">150+</span>
                  <h6>Project Complete</h6>
                  <hr />
                  <p>Quis autem vel eum reprehe voluptate velit esse quam</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp delay-0-4s">
              <div
                className="advertise-banner style-two bg-white"
                style={{
                  backgroundImage: "url(assets/images/banner/star-vector.png)",
                }}
              >
                <h3>Innovative Web Development Solutions</h3>
                <hr className="mb-35" />
                <div className="authors-text">
                  <img src="assets/images/hero/author1.png" alt="Author" />
                  <img src="assets/images/hero/author2.png" alt="Author" />
                  <img src="assets/images/hero/author3.png" alt="Author" />
                  <img src="assets/images/hero/author4.png" alt="Author" />
                  <i className="fal fa-plus" />
                  <span className="text">
                    We denounce indignatione dislike mende charms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advertise Area End */}
      {/* Skills Area Start */}
      <section className="skills-area pt-100 rpt-70 rel z-1">
        <div className="container container-1590">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <h2>Here are Numerous Topics That Will Enhance Your Skills</h2>
              </div>
            </div>
          </div>
          <div className="skills-wrap">
            <div className="skill-item">
              <img src="assets/images/skills/coreldraw.png" alt="Skill Icon" />
              <span className="text">Coreldraw</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/photoshop.png" alt="Skill Icon" />
              <span className="text">Photoshop</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/adobe-xd.png" alt="Skill Icon" />
              <span className="text">Adobe XD</span>
            </div>
            <div className="skill-item">
              <img
                src="assets/images/skills/adobe-after-effects.png"
                alt="Skill Icon"
              />
              <span className="text">Adobe After Effects</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/figma.png" alt="Skill Icon" />
              <span className="text">Figma</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/sketch.png" alt="Skill Icon" />
              <span className="text">Sketch</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/html.png" alt="Skill Icon" />
              <span className="text">HTML</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/css.png" alt="Skill Icon" />
              <span className="text">CSS</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/bootstrap.png" alt="Skill Icon" />
              <span className="text">Bootstrap</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/tailwind.png" alt="Skill Icon" />
              <span className="text">Tailwind CSS</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/sass.png" alt="Skill Icon" />
              <span className="text">Sass</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/javascript.png" alt="Skill Icon" />
              <span className="text">Javascript</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/reactjs.png" alt="Skill Icon" />
              <span className="text">React</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/angular.png" alt="Skill Icon" />
              <span className="text">Angular</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/shopify.png" alt="Skill Icon" />
              <span className="text">Shopify</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/wordpress.png" alt="Skill Icon" />
              <span className="text">WordPress</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/git.png" alt="Skill Icon" />
              <span className="text">Git</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/nodejs.png" alt="Skill Icon" />
              <span className="text">Node Js</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/vuejs.png" alt="Skill Icon" />
              <span className="text">Vue.js</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/express-js.png" alt="Skill Icon" />
              <span className="text">Express Js</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/php.png" alt="Skill Icon" />
              <span className="text">PHP</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/aws.png" alt="Skill Icon" />
              <span className="text">AWS</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/Docker.png" alt="Skill Icon" />
              <span className="text">Docker</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/Heroku.png" alt="Skill Icon" />
              <span className="text">Heroku</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/mongodb.png" alt="Skill Icon" />
              <span className="text">Mongo DB</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/mysql.png" alt="Skill Icon" />
              <span className="text">MySQL</span>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Area End */}
      {/* About Us Area start */}
      <section className="about-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="about-content">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>
                    We're a Cutting-Edge IT Company with a Passion for
                    Innovation
                  </h2>
                </div>
                <div className="text-left-border mt-60 mb-65 wow fadeInUp delay-0-2s">
                  <p>
                    Sculpting digital solutions that transcend boundaries, we
                    stand as pioneers in the realm of technology. Our journey is
                    marked by crafting online marvels that challenge the
                    conventional, embracing the art of turning imagination into
                    captivating digital reality. With unwavering dedication, we
                    endeavor to reshape industries, one line of code at a time.
                  </p>
                </div>
                <div className="about-counter">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-2s">
                        <Counter end={100} extraClass={"percent"} />
                        <span className="counter-title">
                          Clients Satisfactions
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                        <Counter end={96} extraClass={"percent"} />
                        <span className="counter-title">Success Rating</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s">
                        <Counter end={35} extraClass={"percent"} />
                        <span className="counter-title">Goals Attained</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-border-shape wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/about-image-shape.png"
                  alt="About Image Shape"
                />
                <div className="bottom-border" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Service Style Four start */}
      <section
        className="service-area-four pt-110 rpt-85 pb-100 rpb-70"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Popular Services</span>
                <h2>We Provide Amazing Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                  <i class="fab fa-figma"></i>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Figma Designing</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service2.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                  <i className="fas fa-pencil-ruler"></i>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Graphic & visuals</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service4.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="fas fa-desktop" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Web Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service1.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                  <i className="fas fa-mobile-alt"></i>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Mobile Application</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service2.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                  <i class="fab fa-wordpress"></i>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>WordPress Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service1.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                  <i class="fas fa-shopping-cart"></i>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Ecommerce Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service1.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                  <i class="fas fa-server"></i>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Database Management</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service3.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                  <i class="fas fa-bullhorn"></i>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Digital Marketing</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service3.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-abstract" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>React Js Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service5.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-ux" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Front-end development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service6.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-optimization" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Jamstack Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service7.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-goal" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>MVP Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service8.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Service Style Four end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Design</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Product Design</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>SEO Optimization</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>UX/UI Strategy</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Graphics</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Work Gallery Area start */}
      <section className="work-gallery-area pb-130 rpb-100">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Recent Works Gallery</span>
                <h2>We’ve Complete 1532+ Projects Take A Look Our Work</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Swiper
            {...sliderProps.workGallerySliderActiveSwiper}
            className="work-gallery-active"
          >
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery1.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Project Development</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Task Management Dashboard
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery2.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">UI/UX Design</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Website Development
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery3.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Product Design</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Mobile Application Development
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery1.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Project Development</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Task Management Dashboard
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery2.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">UI/UX Design</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Website Development
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery3.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Product Design</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Mobile Application Development
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="work-gallery-controls">
            <button className="work-gallery-prev slick-arrow">
              <i className="far fa-chevron-left" />
            </button>
            <div className="work-gallery-dots">
              <div className="slick-dots"></div>
            </div>
            <button className="work-gallery-next slick-arrow">
              <i className="far fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>
      {/* Work Gallery Area end */}
      {/* Why Choose Us start */}
      <section className="demo-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="why-choose-us-content">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Why Choose Us</span>
                  <h2>Your Trusted Tech Partner for Innovative Solutions</h2>
                </div>
                <div className="row gap-60">
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Affordable Pricing</h5>
                      </div>
                      <p>
                        We employ battle-tested marketing strategies backed by
                        impeccable coding
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Exquisite Craftsmanship</h5>
                      </div>
                      <p>
                        Unveiling seamless digital realms, where every pixel
                        narrates brilliance
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Flexible Commitment</h5>
                      </div>
                      <p>
                        Embrace control - scale up, pause, or halt services,
                        sans binding contracts
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Crystal-Clear Display</h5>
                      </div>
                      <p>
                        Delivering Retina-clarity and flexible interfaces, our
                        content speaks precision
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-right wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/services/why-choose-right.png"
                  alt="Why Choose Right"
                />
                <div className="why-choose-border-shape" />
                <div className="text-shape">
                  <img
                    className="text"
                    src="assets/images/services/web-design-text.svg"
                    alt="Web Design Text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us end */}
      {/* Work Process Area start */}
      <section
        className="work-process-five-area pt-130 pb-90 rpt-100 rpb-60 rel z-1"
        id="work-process-five-area"
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Working Process</span>
                <h2>Simple Step Follow To Complete Work, How It Work</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="work-process-five wow fadeInUp delay-0-2s">
                <div className="icon-title">
                  <i className="flaticon-optimization-1" />
                  <h4>Research & Insights</h4>
                </div>
                <div className="content">
                  <p>
                    Uncover opportunities and insights, transforming ideas into
                    actionable plans that pave the way for your success
                  </p>
                  <Link className="read-more" href="service-details">
                    Learn More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="work-process-five wow fadeInUp delay-0-4s">
                <div className="icon-title">
                  <i className="flaticon-mobile-banking" />
                  <h4>Target & Analysis</h4>
                </div>
                <div className="content">
                  <p>
                    Dive deep into objectives, utilizing comprehensive analysis
                    to devise strategies that resonate and drive impactful
                    outcomes
                  </p>
                  <Link className="read-more" href="service-details">
                    Learn More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="work-process-five wow fadeInUp delay-0-6s">
                <div className="icon-title">
                  <i className="flaticon-optimization" />
                  <h4>Achieve Results</h4>
                </div>
                <div className="content">
                  <p>
                    Witness your goals materialize, as we implement strategies
                    that yield tangible results, leading to growth and
                    advancement
                  </p>
                  <Link className="read-more" href="service-details">
                    Learn More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-130 rpt-90">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active wow fadeInUp delay-0-2s"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> An exceptional IT
                        company that has transformed our digital landscape.
                        Their innovation, expertise, and dedication have
                        propelled our business to new heights.{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Rajesh Kumar</h4>
                          <span className="designation">
                            CEO of TechSolutions Pvt. Ltd
                          </span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40 wow fadeInUp delay-0-2s">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
    </Layout>
  );
};
export default Index2;
