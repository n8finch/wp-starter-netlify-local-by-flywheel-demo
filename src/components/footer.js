import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>This website made by</strong> by{" "}
        <a href="https://me.com">Your Truly</a>
      </p>
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </div>
  </footer>
);

export default Footer;
