import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import "../style/style.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <section className="section">
      <main className="container">{children}</main>
    </section>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
