import { useContext, useEffect } from "react";
import { ScrollerContext } from "components/Layout";

export default function Footer() {
  const { pageData } = useContext(ScrollerContext);

  useEffect(() => {
    const el = document.querySelector(".footer .footer-inner .infinite-box h1");
    const { width } = el.getBoundingClientRect();
    // @ts-ignore
    el.style.setProperty("--title-width", width + 25 + "px");
  }, []);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="infinite-box">
          <h1 className="medium-title">
            {pageData.home.data.attributes.marque_footer}
          </h1>
        </div>
        <div className="line"></div>
        <div className="footer-content">
          <p className="paragraph">© The Ponzi™ EST. 09/05/22</p>
          <a
            href="twitterlink"
            target="_blank"
            rel="noreferrer"
            className="paragraph no-transition tweet-button"
          >
            <img src="/twitter.svg" alt="Twitter" className="image" />
            Tweet us
          </a>
          <a
            className="paragraph credits no-transition"
            href="https://en.wikipedia.org/wiki/Charles_Ponzi"
            target="_blank"
            rel="noreferrer"
          >
            credits
          </a>
        </div>
      </div>
    </footer>
  );
}
