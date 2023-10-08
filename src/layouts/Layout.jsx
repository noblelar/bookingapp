// import React from "react";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Routers from "../routes/routers";
// import { Router } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <Router> */}
      <Header />
        <main>
          <Routers />
        </main>
      <Footer />
      {/* </Router> */}
    </>
  );
};

export default Layout;
