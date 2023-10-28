import { useEffect, useState } from "react";
import gsap from "gsap";
import axios from "axios";
// -------------------------------------------------------------------------------------------------------------

// --------- Image Loader
const loadImages = (onLoaded) => {
  let count = 0;
  const images = document.querySelectorAll("img[data-src]");
  if (images.length === 0) {
    onLoaded();
    return;
  }
  Array.from(images).forEach((img) => {
    img.setAttribute("src", img.getAttribute("data-src") || "");
    // @ts-ignore
    img.onload = () => {
      count++;
      const percent = count / images.length;
      img.classList.add("loaded");

      if (percent === 1) {
        onLoaded();
      }
    };
  });
};

export default function useLoco(
  navRef: React.RefObject<HTMLElement>,
  pageQuery?: string,
) {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!pageQuery) {
      setIsLoading(false);
      return;
    }
    const getPageData = async () => {
      setError(null);
      try {
        const res = await axios.post(process.env.REACT_APP_STRAPI_GRAPHQL_URL, {
          query: pageQuery,
        });
        setData(res.data.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    getPageData();
  }, [pageQuery]);

  useEffect(() => {
    if (isLoading) return;

    const isVisited = localStorage.getItem("is-visited");
    const content = document.querySelector(".content");

    const onLoaded = () => {
      let animateOut = gsap.timeline({});
      if (!isVisited) {
        animateOut.set(content, {
          opacity: 0,
        });
        animateOut.to(content, 1, {
          opacity: 1,
          ease: "expo.inOut",
        });
        localStorage.setItem("is-visited", "true");
      } else {
        animateOut.set(content, {
          y: "100%",
          rotate: "-360deg",
          scale: ".5",
          opacity: 1,
        });
        animateOut.to(content, 1, {
          y: "50%",
          ease: "expo.inOut",
        });
        animateOut.to(content, 1.5, {
          y: "0",
          rotate: "0",
          scale: "1",
          ease: "expo.inOut",
        });
      }
      animateOut.call(() => {
        setLoaded(true);
        navRef.current?.classList.add("active");
      });
    };

    onLoaded();
  }, [navRef, isLoading]);

  return {
    loaded,
    loadImages,
    isLoading,
    data,
    error,
  };
}
