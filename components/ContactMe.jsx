import Link from "next/link"

function ContactMe() {
  return (
    <div className="contact_me">
      <h2 className="contact_me_headline">
        Intrested in doing a project together?
      </h2>
      <div className="contact-me_cta">
        <Link href="/contact">
          <a className="button contact_me_button">Contact Me</a>
        </Link>
      </div>
    </div>
  );
}
export default ContactMe