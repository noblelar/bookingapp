// import React from "react";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Routers from "../routes/routers";
// import { Router } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Router> */}
        <main>
          <Routers />
        </main>
      {/* </Router> */}
      <Footer />
    </>
  );
};

export default Layout;
