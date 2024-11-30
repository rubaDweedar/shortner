import React, { useState } from "react";
import styles from "../styles/Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header + " padding-left-common padding-right-common"}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="Logo" className={styles.logoImage} />
        </div>

        <nav style={{ display: isMenuOpen ? "none" : "flex" }} className={`${styles.desktopNav} nav`}>
          <button className={`${styles.navButton} grayish-violet-text`} onClick={() => null}>
            Features
          </button>
          <button className={`${styles.navButton} grayish-violet-text`} onClick={() => null}>
            Pricing
          </button>
          <button className={`${styles.navButton} grayish-violet-text`} onClick={() => null}>
            Resources
          </button>
        </nav>
      </div>

      <div style={{ display: isMenuOpen ? "none" : "flex" }} className={`${styles.desktopActions} ${styles.rightSection}`}>
        <button className={`${styles.navButton} grayish-violet-text`} onClick={() => null}>
          Login
        </button>
        <button className="light-blue-button" onClick={() => null}>
          Sign Up
        </button>
      </div>

      <button className={`${styles.burgerButton} ${styles.burgerButton}`} onClick={toggleMenu}>
        ☰
      </button>

      {isMenuOpen && (
        <div className={styles.mobileMenu + " violet-bg"}>
          <nav className={styles.mobileNav}>
            <button className={`${styles.navButton} white-text`} onClick={() => null}>
              Features
            </button>
            <button className={`${styles.navButton} white-text`} onClick={() => null}>
              Pricing
            </button>
            <button className={`${styles.navButton} white-text`} onClick={() => null}>
              Resources
            </button>
          </nav>
          <hr className={styles.divider} />
          <div className={styles.mobileActions}>
            <button className={`${styles.navButton} white-text`} onClick={() => null}>
              Login
            </button>
            <button className="light-blue-button" onClick={() => null}>
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
