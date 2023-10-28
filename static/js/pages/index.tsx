import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import ReactMarkdown from "react-markdown";
// -------------------------------------------------------------------------------------------------------------

import Layout, { ScrollerContext } from "components/Layout";
import ErrorScreen from "components/ErrorScreen";
import SimpleSlider from "components/Slider";
import Image from "components/Image";
// -------------------------------------------------------------------------------------------------------------

import getHomePageQuery from "queries/homePage";
import { truncateString } from "utils";
import Footer from "components/Footer";
// -------------------------------------------------------------------------------------------------------------

const getImageURL = (pageData) =>
  process.env.REACT_APP_STRAPI_BASE_URL + pageData.Image.data.attributes.url;

const getMobileImageURL = (pageData) =>
  process.env.REACT_APP_STRAPI_BASE_URL +
  pageData.image_mobile.data.attributes.url;

// -------------------------------------------------------------------------------------------------------------
function Announcement({ data }) {
  return (
    <div className="announcement__wrapper">
      <h1 className="announcement__title title">{data.Announcement_title}</h1>
      <p className="announcement__content paragraph">{data.Announcement}</p>
    </div>
  );
}

// -------------------------------------------------------------------------------------------------------------
function Content() {
  const { pageData, error } = useContext(ScrollerContext);

  useEffect(() => {
    const el = document.querySelector(".banner-headline h1");
    const { width } = el.getBoundingClientRect();
    // @ts-ignore
    el.style.setProperty("--width", width + 25 + "px");
  }, []);

  if (error) {
    return <ErrorScreen error={error} />;
  }

  return (
    <>
      <section className="home__header">
        <div className="home__header--inner">
          <div className="banner-headline">
            <div className="banner-headline-inner">
              <h1 className="text">
                {pageData.home.data.attributes.marque_title}
              </h1>
            </div>
          </div>
          {pageData.home.data.attributes.Announcement && (
            <Announcement data={pageData.home.data.attributes.Announcement} />
          )}
          <div className="home-banner">
            <div className="home-banner-news-wrapper">
              <figure className="home-banner-news-figure">
                <Image
                  src={
                    process.env.REACT_APP_STRAPI_BASE_URL +
                    pageData.home.data.attributes.banner_article.article_image
                      .image.data.attributes.url
                  }
                  alt="BANNER NEWS"
                  className="home-banner-news-figure-pic"
                />
              </figure>
              <div className="marketplace-box">
                <div className="marketplace-box-inner">
                  <div className="title-box">
                    <h1 className="marketplace-box-title mini-title">
                      {pageData.home.data.attributes.Marketplace.title}
                    </h1>
                  </div>
                  <p className="paragraph">
                    {pageData.home.data.attributes.Marketplace.description}
                  </p>
                  <Link
                    to={"/" + pageData.home.data.attributes.Marketplace.link}
                    className="btn"
                  >
                    EXPLORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-banner-news-content">
              <h1 className="title">
                {pageData.home.data.attributes.banner_article.article_title}
              </h1>
              <p className="paragraph">
                <span className="big">
                  {pageData.home.data.attributes.banner_article.article_text[0]}
                </span>
                {pageData.home.data.attributes.banner_article.article_text}
              </p>
              <div className="marketplace-box">
                <div className="marketplace-box-inner">
                  <div className="title-box">
                    <h1 className="marketplace-box-title mini-title">
                      {pageData.home.data.attributes.Marketplace.title}
                    </h1>
                  </div>
                  <p className="paragraph" style={{ columnCount: 1 }}>
                    {pageData.home.data.attributes.Marketplace.description}
                  </p>
                  <Link
                    to={"/" + pageData.home.data.attributes.Marketplace.link}
                    className="btn"
                  >
                    EXPLORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {pageData.blogs.data.length > 0 && (
            <>
              <h1 className="banner-title">
                {
                  pageData.home.data.attributes.home_banner_title[0]
                    .banner_title
                }
              </h1>
              <div className="home-latest__articles__wrapper">
                <div className="article__link__wrapper">
                  {pageData.blogs.data.map((blog, index) => (
                    <Link
                      to={`/news/${blog.id}`}
                      className="article__item__link"
                      key={blog.id}
                    >
                      <span className="article__link__number">{index + 1}</span>
                      <h4 className="article__link__title">
                        {truncateString(blog.attributes.Title, 30)}
                      </h4>
                      <ReactMarkdown className="article__link__paragrpah">
                        {truncateString(blog.attributes.Content, 100)}
                      </ReactMarkdown>
                    </Link>
                  ))}
                </div>
                <div className="home-latest__btn__wrapper">
                  <Link className="btn" to="/articles">
                    ALL NEWS
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="title-side">
        <h1 className="title">
          "This is without doubt the greatest, fairest, most honest Ponzi the
          world has ever seen"
        </h1>
        <h4 className="mini-title">- All Charlies, everywhere</h4>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section__news__wrapper">
            <h1 className="title">
              {pageData.home.data.attributes.Article[0].Title}
            </h1>
            <div className="section__news__row">
              <figure className="section__news__media__wrapper">
                <Image
                  className="section__news__media"
                  src={getImageURL(pageData.home.data.attributes.Article[0])}
                  alt="Latest News Pic"
                  wrapperClassName="lazy-load-desktop-wrapper"
                />
                <Image
                  className="section__news__media section__news__media--mobile"
                  src={getMobileImageURL(
                    pageData.home.data.attributes.Article[0],
                  )}
                  alt="Latest News Pic"
                  wrapperClassName="lazy-load-mobile-wrapper"
                />
              </figure>
              <div className="section__news__content__wrapper">
                <p className="paragraph">
                  <span className="big">
                    {pageData.home.data.attributes.Article[0].Content[0]}
                  </span>
                  {pageData.home.data.attributes.Article[0].Content.slice(1)}
                </p>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </section>

      <section className="news-section">
        <div className="news-section-inner">
          <div className="news-column">
            <div className="news">
              <h1 className="mini-title">
                {pageData.home.data.attributes.Article[1].Title}
              </h1>
              <figure className="news-pic-wrapper">
                <Image
                  className="news-pic"
                  src={getImageURL(pageData.home.data.attributes.Article[1])}
                  alt="News"
                  wrapperClassName="lazy-load-desktop-wrapper"
                />
                <Image
                  className="news-pic news-pic--mobile"
                  src={getMobileImageURL(
                    pageData.home.data.attributes.Article[1],
                  )}
                  alt="News"
                  wrapperClassName="lazy-load-mobile-wrapper"
                />
              </figure>
              <p className="paragraph">
                <span className="big">
                  {pageData.home.data.attributes.Article[1].Content[0]}
                </span>
                {pageData.home.data.attributes.Article[1].Content.slice(1)}
              </p>
              <h1 className="mini-title">✹✹✹</h1>
            </div>
          </div>
          <div className="news-column">
            <div className="news">
              <h1 className="mini-title">
                {pageData.home.data.attributes.Article[2].Title}
              </h1>
              <figure className="news-pic-wrapper">
                <Image
                  className="news-pic"
                  src={getImageURL(pageData.home.data.attributes.Article[2])}
                  alt="News"
                  wrapperClassName="lazy-load-desktop-wrapper"
                />
                <Image
                  className="news-pic news-pic--mobile"
                  src={getMobileImageURL(
                    pageData.home.data.attributes.Article[2],
                  )}
                  alt="News"
                  wrapperClassName="lazy-load-mobile-wrapper"
                />
              </figure>
              <p className="paragraph">
                <span className="big">
                  {pageData.home.data.attributes.Article[2].Content[0]}
                </span>
                {pageData.home.data.attributes.Article[2].Content.slice(1)}
              </p>
              <h1 className="mini-title">✹✹✹</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="nft-section">
        <div className="nft-section-inner">
          <h1 className="banner-title">
            {pageData.home.data.attributes.home_banner_title[1].banner_title}
          </h1>
          <p className="paragraph last">
            {pageData.home.data.attributes.min_ponzi_section.mint_ponzi_text}
          </p>
          <SimpleSlider />
        </div>
      </section>

      <section className="big-news-section">
        <div className="big-news-section-inner">
          <h1 className="banner-title">
            {pageData.home.data.attributes.home_banner_title[2].banner_title}
          </h1>
          <div className="news">
            <figure className="news-pic-wrapper">
              <Image
                className="news-pic"
                src={getImageURL(pageData.home.data.attributes.Article[3])}
                alt="News"
                wrapperClassName="lazy-load-desktop-wrapper"
              />
              <Image
                className="news-pic news-pic--mobile"
                src={getMobileImageURL(
                  pageData.home.data.attributes.Article[3],
                )}
                alt="News"
                wrapperClassName="lazy-load-mobile-wrapper"
              />
            </figure>
            <h1 className="title">
              {pageData.home.data.attributes.Article[3].Title}
            </h1>
            <p className="paragraph">
              <span className="big">
                {pageData.home.data.attributes.Article[3].Content[0]}
              </span>
              {pageData.home.data.attributes.Article[3].Content.slice(1)}
            </p>
          </div>
          <h1 className="banner-title">
            {pageData.home.data.attributes.home_banner_title[3].banner_title}
          </h1>
          <figure className="news-pic-wrapper">
            <Image
              className="news-pic"
              src={getImageURL(pageData.home.data.attributes.Article[4])}
              alt="News"
              wrapperClassName="lazy-load-desktop-wrapper"
            />
            <Image
              className="news-pic news-pic--mobile"
              src={getMobileImageURL(pageData.home.data.attributes.Article[4])}
              alt="News"
              wrapperClassName="lazy-load-mobile-wrapper"
            />
          </figure>
          <div className="news-list">
            <div className="news-column">
              <div className="news-box">
                <h1 className="mini-title">
                  {pageData.home.data.attributes.Article[4].Title}
                </h1>
                <p className="paragraph">
                  <span className="big">
                    {pageData.home.data.attributes.Article[4].Content[0]}
                  </span>
                  {pageData.home.data.attributes.Article[4].Content.slice(1)}
                </p>
              </div>
              <h1 className="mini-title center">✹✹✹</h1>
              <div className="news-box">
                <h1 className="mini-title">
                  {pageData.home.data.attributes.Article[5].Title}
                </h1>
                <p className="paragraph">
                  <span className="big">
                    {pageData.home.data.attributes.Article[5].Content[0]}
                  </span>
                  {pageData.home.data.attributes.Article[5].Content.slice(1)}
                </p>
              </div>
            </div>
            <div className="news-column">
              <div className="news-box">
                <h1 className="mini-title">
                  {pageData.home.data.attributes.Article[6].Title}
                </h1>
                <p className="paragraph">
                  <span className="big">
                    {pageData.home.data.attributes.Article[6].Content[0]}
                  </span>
                  {pageData.home.data.attributes.Article[6].Content.slice(1)}
                </p>
              </div>
              <h1 className="mini-title center">✹✹✹</h1>
              <div className="news-box">
                <h1 className="mini-title">
                  {pageData.home.data.attributes.Article[7].Title}
                </h1>
                <p className="paragraph">
                  <span className="big">
                    {pageData.home.data.attributes.Article[7].Content[0]}
                  </span>
                  {pageData.home.data.attributes.Article[7].Content.slice(1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// -------------------------------------------------------------------------------------------------------------
export default function Home() {
  return (
    <Layout
      pageClassName="home"
      pageWrapperClassName="home__wrapper"
      pageQuery={getHomePageQuery()}
    >
      <Content />
      <Footer />
    </Layout>
  );
}
