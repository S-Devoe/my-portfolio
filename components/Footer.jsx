import Link from "next/link"
import Image from "next/image"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer-logo">
          <Link href="/">
            <a className="logo">DV</a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Me</a>
            </Link>
          </li>
        </ul>
        <div className="socials">
          <ul>
            <li>
              <a href="https://github.com/S-Devoe" title="github">
                <Image
                  src="/images/icons/github.svg"
                  alt="github"
                  width="25"
                  height="24"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/hol_segun" title="twitter">
                <Image
                  src="/images/icons/twitter.svg"
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
    </footer>
  );
}
export default Footer