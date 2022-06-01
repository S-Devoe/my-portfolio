import Link from "next/link";

const Portfolio = () => {
  return (
    <main>
      <section className="wrapper">
        <div className="portfolio">
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
                  This project was a multpage project that required me to build
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
