"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
interface ChildComponentProps {
  scrollTo: (ref: any) => void;
}

export default function Navbar({ scrollTo }: ChildComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = (page: string) => {
    setIsOpen(false);
    scrollTo(page);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Vimean Sam
        </Link>

        {/* Hamburger Toggle Button */}
        <button
          className={`${styles.menuToggle} ${isOpen ? styles.activeToggle : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${styles.navLinks} ${isOpen ? styles.activeLinks : ""}`}
        >
          <a
            onClick={() => {
              navigate("about");
            }}
          >
            About
          </a>
          <a
            onClick={() => {
              navigate("experience");
            }}
          >
            Experience
          </a>
          <a
            onClick={() => {
              navigate("projects");
            }}
          >
            Projects
          </a>
          <a
            onClick={() => {
              navigate("skills");
            }}
          >
            Skills
          </a>
        </nav>
      </div>
    </header>
  );
}
