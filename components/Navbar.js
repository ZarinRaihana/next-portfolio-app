import Link from 'next/link';
import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { BsLinkedin } from 'react-icons/bs';
import { FaBars, FaGithub, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    status ? setStatus(false) : setStatus(true);
  }

    return (
        <div>
          <nav>
            <div className="name" onClick={() => {setTimeout(function () {
            window.scrollTo(0, 0);
        },1000)}}>
              <h4>Zarin</h4>
            </div>

            <ul className={status ? "nav-links nav-active" :"nav-links"} >
              <li>
                  <Link href="#about">
                    <a>About</a>
                  </Link>
              </li>
              <li>
                 <Link href="#skills">
                   <a>Skills</a>
                  </Link>
              </li>
              <li>
                  <Link href="#projects">
                    <a>Projects</a>
                  </Link>
              </li>
              <li>
                  <Link href="#contact">
                    <a>Contact</a>
                  </Link>
              </li>

              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <li>
                    <a href="https://github.com/ZarinRaihana"  target='_blank' rel='noreferrer'>
                      <FaGithub />
                    </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/zarin-raihana-46a580227/" target='_blank' rel='noreferrer'>
                      <BsLinkedin  />
                  </a>
                </li>
              </IconContext.Provider>
            </ul>


            <div className="burger" onClick={handleToggle}>
                { status ? <FaTimes /> : < FaBars />}
            </div>

          </nav>
        </div>
    )
}

export default Navbar
