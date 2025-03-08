import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useEffect, useRef, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link, NavLink } from "react-router";

const Header = ()  => {
    //const [scrollPosition, setScrollPosition] = useState(0);
    const [showHeader, setShowHeader] = useState(true);
    const header = useRef(null);
    let prevScrollPos: number | null;

    /*
    *   Configure some UI elements mainly for animation purposes.
    */
    useEffect(() => {
        
        /*
        *   Funtion to handle scroll direction to update showHeader variable
        */
        const handleScroll = () => {
            if(!prevScrollPos) {
                prevScrollPos = window.pageYOffset;
                return;
            }

            if(prevScrollPos > window.pageYOffset) {
                setShowHeader(true);
                prevScrollPos = window.pageYOffset;
            } else {
                setShowHeader(false);
                prevScrollPos = window.pageYOffset;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => { window.removeEventListener('scroll', handleScroll) }
    }, []);

    return (
    <div className={showHeader ? "header" : 'header headerHidden'} ref={header}>
        <div className="left">
            <h3 className="headerTitle">JoCis - Portfolio</h3>
            <NavLink className="link" to="/#bio" >Bio</NavLink>
            <NavLink className="link" to="/#portfolio">Portfolio</NavLink>
            <Link className="link" to="/#skills">Skills</Link>
            <NavLink className="link" to="/resume">Resume</NavLink>
        </div>
        <div className="right">
            <a className="link" href="https://www.linkedin.com/in/jose-andres-cisneros-591360228/">
                <FontAwesomeIcon icon={"fa-brands fa-linkedin" as IconProp} size="xl" />
                <p>LinkedIn</p>
            </a>
            <a className="link" href="https://github.com/JoseCisCh">
                <FontAwesomeIcon icon={"fa-brands fa-github" as IconProp} size="xl" />
                <p>Github</p>
            </a>
        </div>
    </div>)
}

export default Header;