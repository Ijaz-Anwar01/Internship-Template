// src/App.jsx
import { useEffect, useRef } from "react";
import About from "./Components/Home/About/About";
import Achievement from "./Components/Home/Achivement/Achievement";
import Collections from "./Components/Home/Collections/Collections";
import Footer from "./Components/Home/Footer/Footer";
import Hero from "./Components/Home/Hero/Hero";
import Insight from "./Components/Home/Insights/Insight";
import Navbar from "./Components/Home/Navbar/Navbar";
import Newsletter from "./Components/Home/NewsLetter/Newsletter";
import Testimonials from "./Components/Home/Testimonials/Testimonials";
import Topbar from "./Components/Home/Topbar/Topbar";
import Top from "./Components/Home/TopItems/Top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";
import Shop from "./Components/Pages/ShopPage/Shop";
import ShopHero from "./Components/Pages/ShopPage/SHopHero/ShopHero";
import Description from "./Components/Pages/ProductPage/Desciption/Description";
import GalleryHero from "./Components/Gallery/GalleryHero/GalleryHero";
import GalleryCollections from "./Components/Gallery/GalleryCollections/GalleryCollection";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Components/Cart/Cart-context/CartContext";

const App = () => {
  const aboutRef = useRef(null);
  const blogRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CartProvider>
      
      <Router>
        <Topbar />
        <Navbar onScrollToSection={scrollToSection} aboutRef={aboutRef} blogRef={blogRef} />
        <Routes>

          {/* Home */}
          
          <Route path="/" element={
            <>
              <Hero />
              <Collections />
              <Top />
              <About ref={aboutRef} />
              <Achievement />
              <Testimonials />
              <Insight ref={blogRef} />
            </>
          }/>


          {/* product page */}


          <Route path="/product/:id" element={
            <>
              <ProductPage />
              <Description />
              <Top />
            </>
          }/>



        {/* shop */}

          <Route path='/shop' element={
            <>
              <ShopHero />
              <Shop />
            </>
          }/>

          {/* Gallery */}

          <Route path='/gallery' element={
            <>
              <GalleryHero />
              <GalleryCollections />
              <Testimonials />
            </>
          }/>


          {/* cart */}


          <Route path='/cart' element={
            <>
              <GalleryHero />
              <Cart />
              <Top />
            </>
          }/>
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
