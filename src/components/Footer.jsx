import React from "react";
import logo from "../assets/icon.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["About", "Terms", "Legal"],
    },
    {
      title: "NFT",
      data: ["OpenSea", "Maker", "Learn"],
    },
    {
      title: "Contact",
      data: ["Press", "Support"],
    },
    {
      title: "Social",
      data: ["Twiiter", "Instagram"],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" height="60px" width="60px"/>
          </div>
          <p>Exclusive NFT Collection</p>
          <ul>
            {socialLink.map((link, index) => (
             <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright mittiland<sup>TM</sup></span>
        <span>Launching August 2022</span>
      </div>
    </footer>
  );
}
