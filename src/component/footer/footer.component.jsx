import React from "react";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <nav>
        <ul className="main-footer__links">
          <li className="main-footer__link">
            <a href="/">Support</a>
          </li>
          <li className="main-footer__link">
            <a href="/">Terms of Use</a>
          </li>
        </ul>
      </nav>
      <div className="copyright">
        <ul class="main-footer__links">
          <li className="main-footer__link">
            <a
              href="https://github.com/zakaria-akash"
              target="_blank"
              rel="noreferrer"
            >
              &copy; Zakaria Ibrahim 2023
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
