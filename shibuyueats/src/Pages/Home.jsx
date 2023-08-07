import React from "react";
import { Link } from "react-router-dom";
import Chefs from "./Chefs";
import Member from "./Extra/Member";
import Reviews from "./Extra/Reviews";
import Banner from "./Banner";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <section>
      {/* Banner section */}
      <Banner></Banner>
      {/* banner section ends */}
      {/* chefs section starts */}
      <Gallery></Gallery>
      <section className="container mx-auto py-10 bg-emerald-50">
        <Chefs></Chefs>
      </section>
      {/* Extra Features Sections */}
      {/* Extra Features Sections */}
      <section>
        <Member></Member>
      </section>
      <section>
        <Reviews></Reviews>
      </section>
    </section>
  );
};

export default Home;
