import Menu from '@/components/menu';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Menu />
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.left}>
            <h1>
              The Website Monitoring Service for{' '}
              <span className={styles.highlight}>
                Unmatched Uptime Monitoring
              </span>
            </h1>
            <h2>
              Trusted by thousands to monitor your websites & APIs for complete
              visibility, speed & reliability from{' '}
              <span className={styles.highlight}>anywhere</span>.
            </h2>
            <ul>
              <li>
                <img src="https://uptime.com/images/homepage/TrustSupport.svg" alt="icon"/>
                <p>Trusted for years to stay up</p>
              </li>
              <li>
                <img src="https://uptime.com/images/homepage/Alerts.svg" alt="icon" />
                <p>Real Time & Reliable Alerting</p>
              </li>
              <li>
                <img src="https://uptime.com/images/homepage/Analysis.svg" alt="icon" />
                <p>Quick Identification & Resolution of Outages</p>
              </li>
            </ul>
            <div className={styles.ctas}>
              <button className={styles.tryForFree}>Try For Free</button>
              <button>Request a Demo</button>
            </div>
          </div>
          <div className={styles.right}>
            <img
              src="https://uptime.com/images/products/products_hero_2x.webp"
              alt="Product Hero"
            />
          </div>
        </main>
      </div>
    </>
  );
}
