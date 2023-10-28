const getQuery = () => `
query Home {
    home {
      data {
        attributes {
            Announcement {
                Announcement
                Announcement_title
            }
            banner_article{
                article_title
                article_image{
                  image{
                    data{
                      attributes{
                        name
                        url
                        alternativeText
                      }
                    }
                  }
                  mobile_image{
                    data{
                      attributes{
                        name
                        url
                        alternativeText
                      }
                    }
                  }
                }
                article_text
              }
              hamburger_image{
                data{
                  attributes{
                    name
                    url
                    alternativeText
                  }
                }
              }
              min_ponzi_section{
                mint_ponzi_text
                mint_ponzi_error_text
              }
          marque_title
          marque_footer
          home_banner_title {
            banner_title
          }
          Marketplace {
            title
            description
            link
          }
          Article {
            id
            Title
            Content
            Image {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            image_mobile{
                data {
                    attributes {
                        alternativeText
                        url
                    }
                }
            }
          }
        }
      }
    }
    blogs(pagination:{ page: 0, pageSize: 3}, sort:"publishedAt:desc") {
      data {
        id
        attributes {
          Title
          Content
          createdAt
        }
      }
    }
  }
`;

export const getFooter = () => `
  query Footer {
    home {
        data {
            attributes {
                marque_footer
                hamburger_image{
                    data{
                      attributes{
                        name
                        url
                        alternativeText
                      }
                    }
                  }
            }
        }
    }
  }
`;

export default getQuery;
