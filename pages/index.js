import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CodingLottie from "../components/CodingLottie";
import ContactMe from "../components/ContactMe";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <>
      <Head>
        <title>DeeVoe | Portfolio</title>
        <link
          rel="preload"
          href="/REZ.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <meta name="description" content="Lagbalu Lateef" />
        <meta name="description" content="DeeVoe" />
        <meta name="keywords" content="portfolio" />
      </Head>

      <main id="main-content" className="wrapper">
        <div className="home_hero">
          <picture>
            <source
              srcSet="/images/homepage/desktop/image-homepage-hero.jpg, /images/homepage/desktop/image-homepage-hero@2x.jpg 2x"
              media="(min-width: 1200px)"
            />
            <source
              srcSet="/images/homepage/tablet/image-homepage-hero.jpg, /images/homepage/tablet/image-homepage-hero@2x.jpg 2x"
              media="(min-width: 768px)"
            />
            <source srcSet="/images/homepage/mobile/image-homepage-hero.jpg, /images/homepage/mobile/image-homepage-hero@2x.jpg 2x" />
            {/* eslint-disable-next-line */}
            <img
              src="/images/homepage/mobile/image-homepage-hero.jpg"
              alt="image"
            />
          </picture>
          <div className="home_cta">
            <h1 className="head_text">
              Hey, I&apos;m Lagbalu Lateef and I love building & designing
              beautiful websites
            </h1>
            <a href="#about" className="button button-primary">
              About me
            </a>
          </div>
        </div>
        <div id="about" className="home_about">
          <h2 className="about_headline">About Me</h2>
          <div className="about_content">
            <div className="lottie">
              <CodingLottie animationPath={"/coding-lottie.json"} />
            </div>
            <div className="about_text">
              <p>
                I&apos;m a junior frontend developer and a UI/UX designer
                looking for a new role in an exciting company. I design and
                build websites using modern tools like Figma, Adode Xd, HTML,
                CSS, JavaScript, ReactJS and NextJS. I mostly use React, but I
                can adapt to whatever tools are required. I&apos;m based in
                Lagos, Nigeria, but I&apos;m happy working remotely and have
                experience in remote teams. When I am not coding, you&apos;ll
                find me reading and learning something new. I&apos;d love you to
                check out my work
              </p>
              <div className="port_btn">
                <Link href="/portfolio">
                  <a className="button">Go to Portfolio</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="skill_section">
          <Skills />
        </div>
        <ContactMe />
      </main>
      {/* <Footer /> */}
    </>
  );
}
