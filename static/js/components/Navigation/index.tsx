import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
// -------------------------------------------------------------------------------------------------------------

import WalletConnect from "components/WalletConnect";
import Hamburger from "components/Hamburger";
// -------------------------------------------------------------------------------------------------------------

import useAuth from "hooks/useAuth";
// -------------------------------------------------------------------------------------------------------------

import { truncateWalletString } from "utils";
import AccountModal from "components/AccountModal";
// -------------------------------------------------------------------------------------------------------------

const Navigation = forwardRef(
  (
    {
      showBackgroud = true,
      pageData,
    }: { showBackgroud: boolean; pageData: any },
    ref: ForwardedRef<HTMLElement>,
  ) => {
    // -----------
    const { connector, library, chainId, account, active } = useWeb3React();
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isWalletBoxActive, setIsWalletActive] = useState(false);
    const [isAccountModalActive, setIsAccountModalActive] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const { logout } = useAuth();

    // -----------
    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // ----- Disconnect from wallet handler -----
    const handleDisconnect = () => {
      logout();
      toast.success("Disconnected successfully", {
        style: {
          border: "1px solid #ccc",
          padding: "14px",
          color: "#713200",
          fontSize: "22px",
          fontFamily: "'PT Serif', serif",
        },
      });
      setIsAccountModalActive(false);
    };

    // -----------
    useEffect(() => {
      const status =
        account &&
        active &&
        chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
      setIsLogin(status);
    }, [connector, library, account, active, chainId]);

    // -----------
    return (
      <>
        <motion.nav
          className={`navigation ${!showBackgroud && "blurNavbar"}`}
          ref={ref}
          key="navbar"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.65, -0.01, 0.32, 1] }}
        >
          {showBackgroud && (
            <div className="paper-bg">
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
            </div>
          )}

          <div className="navigation__inner">
            {/* **** Date **** */}
            <div className="nav-box">
              <p className="paragraph">{today}</p>
            </div>

            {/* **** Ponzy Logo **** */}
            <Link to="/" className="nav-box">
              <img className="logo-img" src="/logo.png" alt="LOGO" />
            </Link>

            {/* **** Connect Wallet and Hamburger Menu **** */}
            <div className="nav-box">
              <button
                className="wallet-btn"
                title="CONNECT WALLET"
                onClick={() => {
                  isHamburgerOpen && setIsHamburgerOpen(false);
                  isLogin
                    ? setIsAccountModalActive(true)
                    : setIsWalletActive(!isWalletBoxActive);
                }}
              >
                <img className="wallet-pic" src="/profile.svg" alt="wallet" />
                {isLogin ? (
                  <>
                    <span className="wallet-text-pc">
                      {truncateWalletString(account)}
                    </span>
                    <span className="wallet-text-mobile">Wallet Info</span>
                  </>
                ) : (
                  <span className="wallet-text">Log in</span>
                )}
              </button>

              {isLogin && (
                <Link className="profile__icon" to="/profile" title="Profile">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 154 154"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M77 0.333313C35.439 0.333313 0.333374 35.439 0.333374 77C0.333374 118.561 35.439 153.667 77 153.667C118.561 153.667 153.667 118.561 153.667 77C153.667 35.439 118.561 0.333313 77 0.333313ZM77 38.6666C90.2404 38.6666 100 48.4186 100 61.6666C100 74.9146 90.2404 84.6666 77 84.6666C63.7674 84.6666 54 74.9146 54 61.6666C54 48.4186 63.7674 38.6666 77 38.6666ZM37.854 113.585C44.731 103.465 56.2004 96.7186 69.3334 96.7186H84.6667C97.8074 96.7186 109.269 103.465 116.146 113.585C106.348 124.073 92.4484 130.667 77 130.667C61.5517 130.667 47.652 124.073 37.854 113.585Z"
                      fill="#2E2929"
                    />
                  </svg>
                </Link>
              )}

              <button
                className={isHamburgerOpen ? "hamb-btn active" : "hamb-btn"}
                onClick={() => {
                  isWalletBoxActive && setIsWalletActive(false);
                  setIsHamburgerOpen(!isHamburgerOpen);
                }}
              >
                <span className="hamb-line"></span>
                <span className="hamb-line"></span>
                <span className="hamb-line"></span>
              </button>
            </div>
          </div>
        </motion.nav>

        {/* ****************** Hamburger Modal ******************** */}
        <Hamburger
          isOpen={isHamburgerOpen}
          onClose={() => setIsHamburgerOpen(false)}
          pageData={pageData}
        />

        {/* ****************** Connect Wallet Modal ******************** */}
        <WalletConnect
          isOpen={isWalletBoxActive}
          onClose={() => setIsWalletActive(false)}
        />

        {/* ****************** Account Modal ******************** */}
        <AccountModal
          isOpen={isAccountModalActive}
          onClose={() => setIsAccountModalActive(false)}
          onDisconnect={handleDisconnect}
          accountAddress={account}
        />
      </>
    );
  },
);

export default Navigation;
