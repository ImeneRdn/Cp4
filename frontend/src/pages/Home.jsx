import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Accueil from "../components/accueil/Accueil";
import QuiSommesNous from "../components/quiSommesNous/QuiSommesNous";
import Compte from "../components/compte/Compte";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
        <Route path="/compte" element={<Compte />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
