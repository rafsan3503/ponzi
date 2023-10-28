import { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ScrollerContext } from "components/Layout";

import { NFTItem, apiGetAllItems } from "hooks/useApi";

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
      },
    },
  ],
};

export default function SimpleSlider() {
  const { pageData } = useContext(ScrollerContext);
  const [totalNFTList, setTotalNFTList] = useState<NFTItem[]>(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    (async () => {
      setStatus("pending");
      try {
        // TODO: Remove Hard Coded Values
        const items = await apiGetAllItems(0, 6, "price", "desc", "listed");
        setTotalNFTList(items || []);
        setStatus("resolved");
      } catch (err) {
        setStatus("rejected");
      }
    })();
  }, []);

  return (
    <>
      {status === "resolved" && totalNFTList.length === 0 && (
        <div className="nft-slider-nothings">
          <div className="nft-slider-nothings-inner">
            <h1 className="title">
              {
                pageData.home.data.attributes.min_ponzi_section
                  .mint_ponzi_error_text
              }
            </h1>
          </div>
        </div>
      )}
      {status === "pending" && (
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Loading...</h1>
      )}
      {status === "resolved" && (
        <Slider className="nft-slider" {...settings}>
          {totalNFTList.length > 0 &&
            totalNFTList.map((item, index) => (
              <div
                className="nft-slider-slide"
                key={item.tokenId + "-" + index}
              >
                <figure className="slide-figure">
                  <img
                    src={item.image || "/3.png"}
                    alt="PIC OF SLIDE"
                    className="nft-slider-slide-img"
                  />
                </figure>
                <div className="slide-content">
                  <p className="slide-title">{item.name}</p>
                  <div className="value">
                    <img src="/eth.svg" alt="eth" className="etherium" />
                    <p className="price">{item.price}</p>
                  </div>
                </div>
                <Link to="/market" className="slide-link">
                  BUY NOW
                </Link>
                <img
                  src="/paper-bg.png"
                  alt="BACKGRROUND"
                  className="slide-bg"
                />
              </div>
            ))}
        </Slider>
      )}
    </>
  );
}
