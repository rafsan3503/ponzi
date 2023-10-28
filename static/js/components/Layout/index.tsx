import "react-lazy-load-image-component/src/effects/blur.css";

import { createContext, ReactNode, useRef, Children, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
// -------------------------------------------------------------------------------------------------------------

import Navigation from "components/Navigation";
import SuspenseLoader from "components/SuspenseLoader";
// -------------------------------------------------------------------------------------------------------------

import useLoco from "hooks/useLoco";
// -------------------------------------------------------------------------------------------------------------

const ScrollerContext = createContext(null);
// --------------------------------------------

interface Props {
  children: ReactNode;
  location?: { pathname: string };
  pageClassName: string;
  pageWrapperClassName: string;
  pageQuery?: string;
}
// -------------------------------------------

export default function Layout({
  children,
  pageClassName,
  pageWrapperClassName,
  pageQuery,
}: Props) {
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const { isLoading, data, error } = useLoco(navRef, pageQuery);
  const isNewsPage = location?.pathname.includes("/news/");
  const isArticlesPage = location?.pathname.includes("/articles");
  // -------

  useEffect(() => {
    const elements = [
      // @ts-ignore
      ...document.querySelectorAll(".page-paper-bg img.paper-pic"),
    ];
    elements.forEach((el, index) => {
      // @ts-ignore
      el.style.setProperty("--index", index);
    });
  });

  // --------
  if (isLoading) {
    return <SuspenseLoader />;
  }

  return (
    <>
      {/***** Navbar *****/}
      <Navigation
        ref={navRef}
        key="navbar"
        showBackgroud={!isNewsPage && !isArticlesPage}
        pageData={data}
      />

      {/***** Page Content Wrapper *****/}
      <div className="content" style={{ opacity: 0 }}>
        {/***** Page Scroller Container *****/}
        <motion.div
          style={{ transformOrigin: "center center" }}
          className={`${pageClassName} page`}
          exit={{
            y: "-100%",
            rotate: "360deg",
            scale: 0.5,
          }}
          transition={{
            scale: {
              duration: 1.5,
              ease: [0.85, 0, 0.15, 1],
            },
            y: {
              duration: 1,
              delay: 1.5,
              ease: [0.85, 0, 0.15, 1],
            },
            rotate: {
              duration: 1.5,
              ease: [0.65, -0.01, 0.32, 1],
            },
          }}
        >
          {(isNewsPage || isArticlesPage) && (
            <div className="paper-color-bg"></div>
          )}

          {/***** Page Scroll Container*****/}
          <div
            className={`${pageWrapperClassName} page__wrapper`}
            id="scroll-container"
          >
            {/******
            Children needs to wrap in ScrollerContext. So they can get Locomotive scroller object.
            This need to be done, because in certain situation scroller needs to be update.
            *****/}
            <div
              className="paper-bg page-paper-bg ggg"
              style={{
                backgroundImage: `url('/paper-bg.png')`,
                backgroundRepeat: "repeat",
              }}
            >
              {/* <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" />
              <img className="paper-pic" src="/paper-bg.png" alt="paper-bg" /> */}
            </div>
            {Children.map(children, (child) => (
              <ScrollerContext.Provider value={{ pageData: data, error }}>
                {(!isNewsPage || !isArticlesPage) && <>{child}</>}
              </ScrollerContext.Provider>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export { ScrollerContext };
