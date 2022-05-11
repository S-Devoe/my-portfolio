import Head from "next/head";
import Image from "next/image"
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
      <>
        <Head>
          <title>DeeVoe | Contact</title>
        </Head>
        <main id="main-content" className="wrapper">
          <section className="contact_description">
            <h2 className="cd_headline">Get in Touch</h2>
            <div className="cd_inner">
              <p>
                I’d love to hear about what you’re working on and how I could
                help. I’m currently looking for a new role and am open to a wide
                range of opportunities. I’m a hard-working and positive person
                who will always approach each task with a sense of purpose and
                attention to detail. Please do feel free to check out my online
                profiles below and get in touch using the contact form.
              </p>
              <div className="cd_socials">
                <ul>
                  <li>
                    <a href="https://github.com/S-Devoe" title="github">
                      <Image
                        src="/images/icons/github-copy.svg"
                        alt="github"
                        width="25"
                        height="24"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/hol_segun" title="twitter">
                      <Image
                        src="/images/icons/twitter-copy.svg"
                        alt="twitter"
                        width="25"
                        height="20"
                      />
                    </a>
                  </li>
                  {/* <li></li> */}
                </ul>
              </div>
            </div>
          </section>
          <section className="contact-form_section">
              <h2 className="c-f_headline">
                  Contact Me
              </h2>
              <div className="c-f_component">
                  <ContactForm />
              </div>
          </section>
        </main>
      </>
    );
}
 
export default Contact;