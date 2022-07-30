import Link from "next/link";

const Portfolio = () => {
  return (
    <main>
      <section className="wrapper">
        <div className="portfolio">
          <article className="invoice-app">
            <div className="portfolio_details">
              <div className="image_container">
                {/* eslint-disable-next-line */}
                <img src="./portf/invoice-app-image.jpg" alt="invoice app" />
              </div>

              <div className="portfolio_summary">
                <h2>Invoice App</h2>
                <p>
                  This project is a multipage project that required me to build
                  a fully responsive web-app that can be used to create and
                  store invoices. I built this using React.JS, Styled
                  Components, Typescript and Firebase for my authentication and
                  database, I made sure the web-app is fully-responsive. I took
                  a mobile-first approach and used modern CSS like Flexbox and
                  Grid for layout purposes.
                </p>
                <Link href="/portfolio/[slug]" as="/portfolio/invoice-app">
                  <a className="button">View Project</a>
                </Link>
              </div>
            </div>
          </article>
          <article className="audiophile">
            <div className="portfolio_details">
              <div className="image_container">
                {/* eslint-disable-next-line */}
                <img
                  src="./portf/audiophile-image.jpg"
                  alt="audiophile ecommerce"
                />
              </div>

              <div className="portfolio_summary">
                <h2>Audiophile Ecommerce</h2>
                <p>
                  This project is a multipage project that required me to build
                  a fully responsive website using NextJS, SASS, Typescript and
                  React-Redux. I had mobile and desktop designs to work to, and
                  build it so that it was fully-responsive. I took a
                  mobile-first approach and used modern CSS like Flexbox and
                  Grid for layout purposes.
                </p>
                <Link href="/portfolio/[slug]" as="/portfolio/audiophile">
                  <a className="button">View Project</a>
                </Link>
              </div>
            </div>
          </article>
          <article className="rest_countries">
            <div className="portfolio_details">
              <div className="image_container">
                {/* eslint-disable-next-line */}
                <img
                  src="./portf/rest-countries-image.jpg"
                  alt="rest countries"
                />
              </div>

              <div className="portfolio_summary">
                <h2>Countries </h2>
                <p>
                  This project required me to fetch data from the REST Countries
                  API, and then use this data to develop a functional and
                  responsive website where users can search for a country,
                  filter countries by their region, click on a country&apos;s
                  card to see more details about it, and also check through to
                  the border countries from the detail page. Creating this
                  project helped me to sharpen my coding and problem solving
                  skills.
                </p>
                <Link href="/portfolio/[slug]" as="/portfolio/rest-countries">
                  <a className="button">View Project</a>
                </Link>
              </div>
            </div>
          </article>
          <article className="space_tourism">
            <div className="portfolio_details">
              <div className="image_container">
                {/* eslint-disable-next-line */}
                <img
                  src="./portf/space-tourism-image.jpg"
                  alt="space tourism"
                />
              </div>

              <div className="portfolio_summary">
                <h2>space tourism</h2>
                <p>
                  This was a multipage project that required me to build a fully
                  responsive website with the design file (Figma file) provided.
                  I used ReactJS, along with Styled Components to complete this
                  challenge.
                </p>
                <Link href="/portfolio/[slug]" as="/portfolio/space-tourism">
                  <a className="button">View Project</a>
                </Link>
              </div>
            </div>
          </article>
          <article className="netflix">
            <div className="portfolio_details">
              <div className="image_container">
                {/* eslint-disable-next-line */}
                <img
                  src="./portf/netflix-clone-image.jpg"
                  alt="netflix clone"
                />
              </div>

              <div className="portfolio_summary">
                <h2>Netflix Clone</h2>
                <p>
                  In this project I cloned and built a responsive Netflix
                  website using NextJS, Tailwind CSS, Typescript, and Firebase
                  for authentication
                </p>
                <Link href="/portfolio/[slug]" as="/portfolio/netflix-clone">
                  <a className="button">View Project</a>
                </Link>
              </div>
            </div>
          </article>
          <article className="room_homepage">
            <div className="portfolio_details">
              <div className="image_container">
                {/* eslint-disable-next-line */}
                <img
                  src="./portf/room-homepage-image.jpg"
                  alt="room homepage"
                />
              </div>

              <div className="portfolio_summary">
                <h2>Room Homepage</h2>
                <p>
                  This was a small project which mostly consisted of HTML and
                  CSS. I built a fully-responsive landing page. The only
                  JavaScript this project required was to enable the toggling of
                  the mobile navigation.
                </p>
                <Link href="/portfolio/[slug]" as="/portfolio/room-homepage">
                  <a className="button">View Project</a>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
