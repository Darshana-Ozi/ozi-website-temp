import './App.css';

import React from "react";

// Import your logo here - replace 'ozi-logo.png' with your actual filename
import oziLogo from './assets/Ozi-logo.png'
import phoneImg from './assets/phone.svg';
import first from './assets/first.svg';
import second from './assets/second.svg';
import third from './assets/third.svg';
import appleButton from './assets/apple_button.svg';
import playStoreButton from './assets/playStoreButton.svg';
import parent1 from './assets/parent1.svg';
import parent2 from './assets/parent2.svg';
import parent3 from './assets/parent3.svg';
import parent4 from './assets/parent4.svg';
import appleQR from './assets/AppleStore.jpg';
import playStoreQR from './assets/PlayStore.jpg';
import category1 from './assets/category1.svg';
import category2 from './assets/category2.svg';
import category3 from './assets/category3.svg';
import category4 from './assets/category4.svg';

// Import brand logos
import BR1 from './assets/BrandsImages/BR1.svg';
import BR2 from './assets/BrandsImages/BR2.svg';
import BR3 from './assets/BrandsImages/BR3.svg';
import BR4 from './assets/BrandsImages/BR4.svg';
import BR5 from './assets/BrandsImages/BR5.svg';
import BR6 from './assets/BrandsImages/BR6.svg';
import BR7 from './assets/BrandsImages/BR7.svg';
import BR8 from './assets/BrandsImages/BR8.svg';
import BR9 from './assets/BrandsImages/BR9.svg';
import BR10 from './assets/BrandsImages/BR10.svg';
import BR11 from './assets/BrandsImages/BR11.svg';
import BR12 from './assets/BrandsImages/BR12.svg';
import BR13 from './assets/BrandsImages/BR13.svg';
import BR14 from './assets/BrandsImages/BR14.svg';
import BR15 from './assets/BrandsImages/BR15.svg';
import BR16 from './assets/BrandsImages/BR16.svg';
import BR17 from './assets/BrandsImages/BR17.svg';
import BR18 from './assets/BrandsImages/BR18.svg';
import BR19 from './assets/BrandsImages/BR19.svg';

import BL1 from './assets/BrandsImages/BL1.svg';
import BL2 from './assets/BrandsImages/BL2.svg';
import BL3 from './assets/BrandsImages/BL3.svg';
import BL4 from './assets/BrandsImages/BL4.svg';
import BL5 from './assets/BrandsImages/BL5.svg';
import BL6 from './assets/BrandsImages/BL6.svg';
import BL7 from './assets/BrandsImages/BL7.svg';
import BL8 from './assets/BrandsImages/BL8.svg';
import BL9 from './assets/BrandsImages/BL9.svg';
import BL10 from './assets/BrandsImages/BL10.svg';
import BL11 from './assets/BrandsImages/BL11.svg';
import BL12 from './assets/BrandsImages/BL12.svg';
import BL13 from './assets/BrandsImages/BL13.svg';
import BL14 from './assets/BrandsImages/BL14.svg';
import BL15 from './assets/BrandsImages/BL15.svg';
import BL16 from './assets/BrandsImages/BL16.svg';
import BL17 from './assets/BrandsImages/BL17.svg';
import BL18 from './assets/BrandsImages/BL18.svg';
import BL19 from './assets/BrandsImages/BL19.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaApple, FaGooglePlay, FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import footer from './assets/footer.png';
import playS from './assets/playS.svg'



function App() {
  const categorySettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600, // mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const categories = [
    { title: 'Baby & Kids Clothing', image: category1 },
    { title: 'Toys For Kids', image: category2 },
    { title: 'Day To Day Care', image: category3 },
    { title: 'Gifts', image: category4 },
  ];


  // const SingleRowFacilityHighLight = ({ items }) => {
  // return (
  //   <Box
  //     display="flex"
  //     justifyContent="center"
  //     alignItems="center"
  //     flexDirection="row"
  //     width="100%"
  //     overflow="hidden"
  //     sx={{
  //       "@media (max-width:500px)": {
  //         position: "relative",
  //       },
  //     }}
  //   >
  //     <Box
  //       className="scrolling-content"
  //       display="flex"
  //       flexDirection="row"
  //       justifyContent="space-between"
  //       paddingTop="16px"
  //       alignItems="center"
  //       gap={4}
  //       sx={{
  //           width: "60%",
  //           flexWrap: "nowrap",
  //           "@media (max-width:500px)": {
  //             width: "max-content",
  //           },
  //         }}
  //       >
  //         {items?.map((item, index) => (
  //           <Box
  //             key={index}
  //             display="flex"
  //             alignItems="center"
  //             gap={1}
  //             mb={2}
  //             sx={{
  //               flexShrink: 0,
  //               whiteSpace: "nowrap",
  //             }}
  //           >
  //             <img
  //               src={item.icon}
  //               alt={item.title}
  //               width={35}
  //               height={35}
  //               style={{
  //                 maxWidth: "100%",
  //                 borderRadius: "16px",
  //                 maxHeight: "400px",
  //               }}
  //             />
  //             <Typography fontWeight={500} fontSize="12px">
  //               {item.title}
  //             </Typography>
  //           </Box>
  //         ))}
  //       </Box>
  // </Box>
  //  );
  // };
  // const itemsData = [
  //   { icon: "../first.svg", title: "Delivery in minutes" },
  //   { icon: "../second.svg", title: "24/7 Essentials" },
  //   { icon: "../third.svg", title: "100% Genuine Products"},
  // ];

  // function App() {
  //   return (
  //     <div>
  //       <BadgesScroll />
  //     </div>
  //   );
  // }

  // export default App;



  // Brands array for the upper row (sliding left to right)
  const upperBrands = [
    { id: 1, logo: BR1, name: 'Brand 1' },
    { id: 2, logo: BR2, name: 'Brand 2' },
    { id: 3, logo: BR3, name: 'Brand 3' },
    { id: 4, logo: BR4, name: 'Brand 4' },
    { id: 5, logo: BR5, name: 'Brand 5' },
    { id: 6, logo: BR6, name: 'Brand 6' },
    { id: 7, logo: BR7, name: 'Brand 7' },
    { id: 8, logo: BR8, name: 'Brand 8' },
    { id: 9, logo: BR9, name: 'Brand 9' },
    { id: 10, logo: BR10, name: 'Brand 10' },
    { id: 11, logo: BR11, name: 'Brand 11' },
    { id: 12, logo: BR12, name: 'Brand 12' },
    { id: 13, logo: BR13, name: 'Brand 13' },
    { id: 14, logo: BR14, name: 'Brand 14' },
    { id: 15, logo: BR15, name: 'Brand 15' },
    { id: 16, logo: BR16, name: 'Brand 16' },
    { id: 17, logo: BR17, name: 'Brand 17' },
    { id: 18, logo: BR18, name: 'Brand 18' },
    { id: 19, logo: BR19, name: 'Brand 19' },
  ];

  const lowerBrands = [
    { id: 1, logo: BL1, name: 'BrandL 1' },
    { id: 2, logo: BL2, name: 'BrandL 2' },
    { id: 3, logo: BL3, name: 'BrandL 3' },
    { id: 4, logo: BL4, name: 'BrandL 4' },
    { id: 5, logo: BL5, name: 'BrandL 5' },
    { id: 6, logo: BL6, name: 'BrandL 6' },
    { id: 7, logo: BL7, name: 'BrandL 7' },
    { id: 8, logo: BL8, name: 'BrandL 8' },
    { id: 9, logo: BL9, name: 'BrandL 9' },
    { id: 10, logo: BL10, name: 'BrandL 10' },
    { id: 11, logo: BL11, name: 'BrandL 11' },
    { id: 12, logo: BL12, name: 'BrandL 12' },
    { id: 13, logo: BL13, name: 'BrandL 13' },
    { id: 14, logo: BL14, name: 'BrandL 14' },
    { id: 15, logo: BL15, name: 'BrandL 15' },
    { id: 16, logo: BL16, name: 'BrandL 16' },
    { id: 17, logo: BL17, name: 'BrandL 17' },
    { id: 18, logo: BL18, name: 'BrandL 18' },
    { id: 19, logo: BL19, name: 'BrandL 19' },
  ];
  return (
    <div className="page">
      {/* Top Announcement Bar */}
      <div className="topbar">
        <div className="container">
          <span>Delivered in Minutes | Enjoy Free Shipping Today → Order Now</span>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className='web-app'>
          <div className="container header-inner">
            <div className="brand">
              <div className="brand-logo">
                <img src={oziLogo} alt="OZi" className="logo-img" />
              </div>

            </div>
            <div className="store-actions">
              <a className="store-btn ios" href="https://apps.apple.com/in/app/ozi-parenting-need-in-minutes/id6748863035"
                aria-label="App Store"
                target="_blank"
                rel="noopener noreferrer">
                <FaApple size={28} style={{ marginRight: "8px" }} />
                <span className="store-text">
                  <small>Download on the</small>
                  <strong> App Store</strong>
                </span>
              </a>

              <a className="store-btn android" href="https://play.google.com/store/apps/details?id=com.ozi.user&pcampaignid=web_share"
                aria-label="Google Play"
                target="_blank"
                rel="noopener noreferrer">
                <FaGooglePlay size={28} style={{ marginRight: "8px" }} />
                <span className="store-text">
                  <small>Get it on</small>
                  <strong> Google Play</strong>
                </span>
              </a>
            </div>
          </div>
        </div>




        <div className="mobile-download">
          <div>
            <img src={oziLogo} alt="Ozi Logo" className="ozi-logo" />
          </div>
          <div className='appT'>
            <span className="download-text">
              Download The<br />App Now
            </span>

            <div className="store-icons">
              <a
                href="https://apps.apple.com/in/app/ozi-parenting-need-in-minutes/id6748863035"
                aria-label="App Store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appleButton} alt="App Store" />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.ozi.user&pcampaignid=web_share"
                aria-label="Google Play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playStoreButton} alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              The Quality Kids Need, The <br />
              Speed You Crave - Delivered.
            </h1>
            <p>We deliver all your baby and toddler needs in minutes.</p>
            <button
              className="primary-btn"
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://shop.ozi.in/home", "_blank")}
            >
              Order Now
            </button>

          </div>
          <div className="hero-visual" aria-hidden>
            <img src={phoneImg} alt="OZi App" className="phone-image" />
          </div>
        </div>
      </section>

      <section className="hero-badges">
        <div className="hero-badges-track">
          <div className="badge">
            <img src={first} alt="Delivery in Minutes" />
            <span>Delivery in Minutes</span>
          </div>
          <div className="badge">
            <img src={second} alt="24/7 Essentials" />
            <span>24/7 Essentials</span>
          </div>
          <div className="badge">
            <img src={third} alt="100% Genuine Products" />
            <span>100% Genuine Products</span>
          </div>
        </div>
      </section>



      {/* Categories */}
      <section className="section">
        <div className="container">
          <h2>All Baby & Kids Essentials, Just A Tap Away</h2>

          <div className="category-row">
            {categories.map((item) => (
              <div key={item.title} className="category-card">
                <img src={item.image} alt={item.title} className="category-image" />
                <div className="category-name">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Brands */}
      <section className="section brands">
        <div className="container">
          <h2>Trusted Brands, Handpicked For Your Little One</h2>

          {/* First Row - Slides from Left */}
          <div className="brand-row brand-row-1">
            <Slider
              dots={false}
              infinite={true}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={0} // No pause between slides
              speed={3000}      // Smooth speed
              cssEase="linear"  // Smooth transition
              pauseOnHover={false}
              rtl={false}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: { slidesToShow: 4 }
                },
                {
                  breakpoint: 768,
                  settings: { slidesToShow: 3 }
                },
                {
                  breakpoint: 480,
                  settings: { slidesToShow: 2 }
                }
              ]}
            >
              {upperBrands.map((brand) => (
                <div key={brand.id} className="brand-pill">
                  <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
                </div>
              ))}
            </Slider>
          </div>

          {/* Second Row - Slides from Right */}
          <div className="brand-row brand-row-2">
            <Slider
              dots={false}
              infinite={true}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={0} // No pause between slides
              speed={3000}      // Smooth speed
              cssEase="linear"  // Smooth transition
              pauseOnHover={false}
              rtl={true}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: { slidesToShow: 4 }
                },
                {
                  breakpoint: 768,
                  settings: { slidesToShow: 3 }
                },
                {
                  breakpoint: 480,
                  settings: { slidesToShow: 2 }
                }
              ]}
            >
              {lowerBrands.map((brand) => (
                <div key={brand.id} className="brand-pill">
                  <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section why">
        <div className="container">
          <h2>
            Why Parents Choose <span className="accent">OZi</span>
          </h2>
          <div className="info-grid">
            {[
              {
                title: 'Delivered In Mins',
                icon: parent1,
                text:
                  'Get your baby essentials delivered in minutes, because little ones can’t wait!',
              },
              {
                title: 'Shop 24/7',
                icon: parent2,
                text:
                  'Round the clock for baby essentials, always within reach and ready when you are.',
              },
              {
                title: 'Premium Quality',
                icon: parent3,
                text: 'Only top-rated, high-quality products curated for your precious little one.',
              },
              {
                title: 'Certified & Trusted Brands',
                icon: parent4,
                text:
                  'Carefully selected brands that test, certify, and meet baby-safe standards.',
              },
            ].map((item) => (
              <div key={item.title} className="info-card">
                <img src={item.icon} alt={item.title} className="info-icon" />
                <div className="info-title">{item.title}</div>
                <p className="info-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="section cta">
        <div className="container cta-inner">
          <div className="cta-left">
            <div className="chip-row">
              <span className="chip">Exclusive App-Only Deals</span>
              <span className="chip">Fastest Delivery In Your Area</span>
            </div>
            <h3>
              Shop Now For You & Your Little One - On The Go!
            </h3>
            <p>
              Get fast deliveries of baby care, kids clothes, essentials, gifts and mom needs –
              anytime, anywhere.
            </p>
          </div>
          <div className="cta-right">
            <div className="download-section">
              <h4 className="download-main-title">Download The OZI App Now!</h4>
              <div className="download-cards-container">
                <div className="download-card">
                  <div className="download-title">For iOS</div>
                  <a href="https://apps.apple.com/in/app/ozi-parenting-need-in-minutes/id6748863035"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-dark">
                    <FaApple size={20} />
                    <span>Download App</span>
                  </a>
                  <img src={appleQR} alt="Apple Store QR Code" className="qr-code" />
                  <div className="platform-icon">
                    <FaApple size={16} />
                  </div>
                </div>
                <div className="download-card">
                  <div className="download-title">For Android</div>
                  <a href="https://play.google.com/store/apps/details?id=com.ozi.user&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-dark">
                    <FaGooglePlay size={20} />
                    <span>Download App</span>
                  </a>
                  <img src={playStoreQR} alt="Play Store QR Code" className="qr-code" />
                  <div className="platform-icon">
                    <FaGooglePlay size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          {/* Desktop Footer */}
          <div className="footer-desktop">
            <div className="contact-row">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-content">
                  <div className="contact-title">Send Us A Message</div>
                  <div className="contact-value">Contact@ozi.in</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-content">
                  <div className="contact-title">Contact Us</div>
                  <div className="contact-value">+91 8527701482</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-content">
                  <div className="contact-title">Find Us At</div>
                  <div className="contact-value">M5FQ+43 Delhi, India</div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="brand brand-sm">
                <img src={footer} alt="OZi" className="logo-img logo-sm" />
              </div>
              <nav className="footer-links">

              </nav>
              <div className="copyright">© 2025 Ozi Technologies Private Limited</div>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="footer-mobile">
            <div className="mobile-footer-content">
              <div className="mobile-footer-logo">
                <img src={footer} alt="OZi" className="logo-img logo-sm" />
              </div>


              <div className="mobile-copyright">
                © 2025 Ozi Technologies Private Limited
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
