'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from './menu.module.css';

const clearHover = () => {
  const elements = document.getElementsByClassName(`${styles.subMenu}`);
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i]) continue;
    const element = elements[i] as HTMLElement;
    element.style.display = 'none';
  }
};

const onHover = (id: string) => {
  clearHover();
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'block';
  }
};

const onLeave = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'none';
  }
};

function Platform() {
  return (
    <div
      id="platform"
      style={{ display: 'none' }}
      className={styles.subMenu}
      onMouseLeave={() => onLeave('platform')}
    >
      <div>
        <span>
          <strong>Monitoring</strong>
        </span>
        <ul>
          <li>
            <a>Uptime</a>
          </li>
          <li>
            <a>Api</a>
          </li>
          <li>
            <a>Synthetic</a>
          </li>
          <li>
            <a>Real User (RUM)</a>
          </li>
          <li>
            <a>Private Location</a>
          </li>
        </ul>
      </div>
      <div>
        <span>
          <strong>More features</strong>
        </span>
        <ul>
          <li>
            <a>Status Page</a>
          </li>
          <li>
            <a>Group Check</a>
          </li>
          <li>
            <a>Reporting</a>
          </li>
          <li>
            <a>Alerting</a>
          </li>
          <li>
            <a>Integration</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function FreeTools() {
  return (
    <div
      id="freeTools"
      style={{ display: 'none' }}
      className={styles.subMenu}
      onMouseLeave={() => onLeave('freeTools')}
    >
      <div>
        <ul>
          <li>
            <a>Page Speed Test</a>
          </li>
          <li>
            <a>Domain Health Test</a>
          </li>
          <li>
            <a>Global Uptime Test</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Solution() {
  return (
    <div
      id="solution"
      style={{ display: 'none' }}
      className={styles.subMenu}
      onMouseLeave={() => onLeave('solution')}
    >
      <div>
        <ul>
          <li>
            <a>Shopify Store Monitoring</a>
          </li>
          <li>
            <a>Enterprise Monitoring</a>
          </li>
          <li>
            <a>UPro! Services Implementation</a>
          </li>
          <li>
            <a>Affiliate Program</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div
      id="resources"
      style={{ display: 'none' }}
      className={styles.subMenu}
      onMouseLeave={() => onLeave('resources')}
    >
      <div>
        <ul>
          <li>
            <a>Comparison</a>
          </li>
          <li>
            <a>Probe Server Location</a>
          </li>
          <li>
            <a>Popular Sites Uptime</a>
          </li>
          <li>
            <a>Api Documentation</a>
          </li>
          <li>
            <a>Release Notes</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Success Stories</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Support Center</a>
          </li>
          <li>
            <a>Trust & Security Center</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Company() {
  return (
    <div
      id="company"
      style={{ display: 'none' }}
      className={styles.subMenu}
      onMouseLeave={() => onLeave('company')}
    >
      <div>
        <ul>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Our Team</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1140) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.mobileTopBar}>
        <div className={styles.logo}>
          <Image src="/assets/logo.svg" alt="Logo" width={887} height={229} />
        </div>
        <div className={styles.toggleMenu}>
          {isOpen ? (
            <button onClick={toggleMenu}>
              <img
                src="https://uptime.com/theme/img/global/header-menu-toggle-close.svg"
                alt="Close Menu"
              />
            </button>
          ) : (
            <button onClick={toggleMenu}>
              <img
                src="https://uptime.com/theme/img/global/header-menu-toggle.svg"
                alt="Open Menu"
              />
            </button>
          )}
        </div>
      </div>
      <div
        className={styles.mobileMenu}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className={styles.ctas} style={{ flexWrap: 'wrap' }}>
          <button>Log In</button>
          <button className={styles.tryForFree}>Try For Free</button>
        </div>
        <ul className={styles.mobileNavList}>
          <li>
            <a>Platform</a>
          </li>
          <li>
            <a>Free Tools</a>
          </li>
          <li>
            <a>Solutions</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
          <li>
            <a>Company</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function Menu() {
  return (
    <>
      <menu className={styles.menuContainer}>
        <div className={styles.logo}>
          <Image src="/assets/logo.svg" alt="Logo" width={887} height={229} />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a onMouseOver={() => onHover('platform')}>
                Platform{' '}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </a>
            </li>
            <li>
              <a onMouseOver={() => onHover('freeTools')}>
                Free Tools{' '}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </a>
            </li>
            <li>
              <a onMouseOver={() => onHover('solution')}>
                Solutions{' '}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </a>
            </li>
            <li>
              <a onMouseOver={() => clearHover()}>Pricing</a>
            </li>
            <li>
              <a onMouseOver={() => onHover('resources')}>
                Resources{' '}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </a>
            </li>
            <li>
              <a onMouseOver={() => onHover('company')}>
                Company{' '}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.ctas}>
          <button>Log In</button>
          <button className={styles.tryForFree}>Try For Free</button>
        </div>
      </menu>
      <Platform />
      <FreeTools />
      <Solution />
      <Resources />
      <Company />
      <MobileMenu />
    </>
  );
}
