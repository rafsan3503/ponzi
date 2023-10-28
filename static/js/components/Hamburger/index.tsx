import { Link, useHistory } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useClickAway } from "react-use";
// -------------------------------------------------------------------------------------------------------------

import links from "./links";
// -------------------------------------------------------------------------------------------------------------

export default function Hamburger({
  isOpen,
  onClose,
  pageData,
}: {
  isOpen: boolean;
  onClose: () => void;
  pageData: any;
}) {
  // ------
  const ref = useRef(null);
  const [toggleContract, setToggleContract] = useState(false);

  const history = useHistory();

  const handleOnLinkClick = (e, link) => {
    e.preventDefault();
    onClose();
    history.push(link);
  };

  useEffect(() => {
    const btns = document.querySelectorAll(".hamb-link-btn");
    btns.forEach((btn) => {
      const p = btn.querySelector(".btn-text");
      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(p.textContent);
        btn.classList.add("active");
        setTimeout(() => {
          btn.classList.remove("active");
        }, 5000);
      });
    });
  });

  useClickAway(ref, () => {
    setToggleContract(false);
  });

  // ------
  return (
    <div
      className={`hamb-menu-backdrop ${isOpen && "active"}`}
      onClick={onClose}
    >
      <div
        className={`hamb-menu ${isOpen && "active"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img className="hamb-bg" src="/paper-bg.png" alt="paper-bg" />
        {/**********/}
        <div className="hamb-menu-inner">
          <figure className="hamb-pic-wrapper">
            <img
              className="hamb-pic"
              src={
                process.env.REACT_APP_STRAPI_BASE_URL +
                pageData.home.data.attributes.hamburger_image.data.attributes
                  .url
              }
              alt="Hamburger"
            />
          </figure>

          <div className="hamb-links">
            {/****** Hamburger Links ******/}
            {links.map((link) => (
              <Link
                key={link.id}
                className="hamb-link"
                to={link.url}
                onClick={(e) => handleOnLinkClick(e, link.url)}
              >
                {link.title}
              </Link>
            ))}

            <div className="drop-box">
              <button
                className={"drop-box-btn " + (toggleContract ? " active" : "")}
                onClick={() => setToggleContract(!toggleContract)}
              >
                Contracts
              </button>
            </div>
            <div
              className={"drop-content " + (toggleContract ? "active" : "")}
              ref={ref}
            >
              <div className="hamb-link-btn">
                <h1
                  className="btn-title"
                  data-text="copy"
                  data-text-active="copied"
                >
                  Ponzi NFT:
                </h1>
                <p className="btn-text">
                  0xc0f6cc4b7e67f0518851068601c9f7c4ef18b201
                </p>
              </div>
              {/* <div className="hamb-link-btn">
                <h1
                  className="btn-title"
                  data-text="copy"
                  data-text-active="copied"
                >
                  Ponzi Token:
                </h1>
                <p className="btn-text">
                  0x4ef3762459b5795113bE3a63Eae9dfa7FB47d15E
                </p>
              </div> */}
              <div className="hamb-link-btn">
                <h1
                  className="btn-title"
                  data-text="copy"
                  data-text-active="copied"
                >
                  Ponzi Marketplace:
                </h1>
                <p className="btn-text">
                  0x78eb94d0630e4302359226feeac70593410580b3
                </p>
              </div>
              <div className="hamb-link-btn">
                <h1
                  className="btn-title"
                  data-text="copy"
                  data-text-active="copied"
                >
                  Ponzi Coin:
                </h1>
                <p className="btn-text">
                  0x0a40E0f19Da13c27A251e8d4bc31fd4Ca2D9BF87
                </p>
              </div>
              <img src="/paper-bg.png" alt="error" className="bg" />
            </div>

            {/***** Social Links *****/}
            <div className="social-links">
              <a
                className="social-link"
                href="https://twitter.com/OfficialPonzi"
              >
                <img src="/twitter.svg" alt="error" className="image" />
              </a>
              <a
                className="social-link"
                href="https://opensea.io/collection/the-ponzi"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/opensea.svg" alt="error" className="image" />
              </a>
              <a
                className="social-link"
                href="https://blur.io/collection/the-ponzi"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/blur.svg" alt="error" className="image" />
              </a>
              <a
                className="social-link"
                href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x0a40E0f19Da13c27A251e8d4bc31fd4Ca2D9BF87"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/uniswap.png" alt="error" className="image" />
              </a>
              {/* <a
                className="social-link"
                href="https://app.sushi.com/swap?outputCurrency=0x4ef3762459b5795113bE3a63Eae9dfa7FB47d15E&chainId=1"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/sushiswap.png" alt="error" className="image" />
              </a> */}
            </div>
          </div>

          {/**********/}
          <button className="close-btn" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
