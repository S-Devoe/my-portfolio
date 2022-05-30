import Link from "next/link";

const Portfolio = () => {
  return (
    <main>
      <section className="wrapper">
        <div className="portfolio">
          <article className="space_tourism">
            <div className="portfolio_details">
              <div className="image_container">
                {/* eslint-disable-next-line */}
                <img src="./portf/space.jpg" alt="space tourism" />
              </div>

              <div className="portfolio_summary">
                <h2>space tourism</h2>
                <p>
                  This was a multipage project that required me to build a fully
                  responsive website with the design file (Figma file) provided.
                  I used ReactJS, along with Styled Components to complete this
                  challenge.
                </p>
                <Link href="/portfolio/[slug]" as="/portfolio/space">
                  <a className="button">View Project</a>
                </Link>
              </div>
            </div>
          </article>
          <article className="netflix">
            <div className="portfolio_details">
              <div className="image_container">
                {/* eslint-disable-next-line */}
                <img src="./portf/netflix.jpg" alt="netflix clone" />
              </div>

              <div className="portfolio_summary">
                <h2>Netflix Clone</h2>
                <p>
                  In this project I cloned and built a responsive Netflix website using NextJS, Tailwind CSS, Typescript, and Firebase for authentication
                </p>
                <Link href="/portfolio/[slug]" as="/portfolio/netflix">
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
