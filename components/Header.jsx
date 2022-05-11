import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {useRouter} from "next/router"

function Header() {
  const[showMenu, setShowMenu] = useState(true)
  // const router = useRouter()
  const { asPath } = useRouter()

  console.log(asPath)

  // console.log(router.pathname)

  return (
    <header className="header">
      <div className="header_container">
        <Link href="/">
          <a className="header_logo">
            <p>dv</p>
          </a>
        </Link>
        <div className="hamburger_menu">
          {showMenu ? (
            <div className="" onClick={() => setShowMenu((prev) => !prev)}>
              <Image
                src="/images/icons/hamburger.svg"
                alt="hamburger"
                height="20px"
                width="25px"
              />
            </div>
          ) : (
            <div className="" onClick={() => setShowMenu((prev) => !prev)}>
              <Image
                src="/images/icons/close.svg"
                alt="hamburger"
                height="20px"
                width="25px"
              />
            </div>
          )}
        </div>
        <nav className={`nav ${showMenu ? 'hide-nav' : 'show-nav'}`}>
          <ul>
            <li className={`${asPath === "/" ? "active" : ""}`}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={`${asPath === "/portfolio" ? "active" : ""}`}>
              <Link href="/">
                <a>Portfolio</a>
              </Link>
            </li>
            <li className={`${asPath === "/contact" ? "active" : ""}`}>
              <Link href="/contact">
                <a>Contact me</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header