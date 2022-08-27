import { Facebook, GitHub, Instagram, MailOutline, Phone, Room, YouTube } from "@mui/icons-material";
import React from "react";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerAddr">
          <h1 className="footerLogo">
            <img
              src="./../logo_bear.png"
              alt="logo"
              height={"40px"}
              width={"40px"}
            />
            Ecommerce Web
          </h1>

          <h2>Contact</h2>

          <address>
            Hà Nội, Việt Nam
          </address>
          <br />

          <ul className="footerColumnLists">
            <a className="footerListItem" href="#">
              <Room className="footerIcon" />
              1 Đại Cồ Việt, Hà Nội, Việt Nam
            </a>
            <a className="footerListItem" href="#">
              <Phone className="footerIcon"/>
              VN: 000.000.0001
              <br />
              JP: 000.000.0002
            </a>
            <a className="footerListItem" href="mailto:hust@gmail.com">
              <MailOutline className="footerIcon" />
              hust@gmail.com
            </a>
          </ul>
        </div>

        <div className="footerColumn">
          <h3 className="footerColumnTitle">Media</h3>
          <ul className="footerColumnLists">
            <a className="footerListItem" href="#">
              <Facebook className="footerIcon" style={{color:"#4267B2"}}/>
              Facebook
            </a>
            <a className="footerListItem" href="#">
              <YouTube className="footerIcon" style={{color:"#FF0000"}}/>
              Youtube
            </a>
            <a className="footerListItem" href="#">
              <Instagram className="footerIcon" style={{color:"#fb3958"}}/>
              Instagram
            </a>
            <a className="footerListItem" href="#">
              <GitHub className="footerIcon" style={{color:"black"}}/>
              Github
            </a>
          </ul>
        </div>

        <div className="footerColumn">
          <h3 className="footerColumnTitle">Technology</h3>
          <ul className="footerColumnLists">
            <li className="footerListItem">Hardware Design</li>
            <li className="footerListItem">Software Design</li>
          </ul>
        </div>

        <div className="footerColumn">
          <h3 className="footerColumnTitle">Legal</h3>
          <ul className="footerColumnLists">
            <li className="footerListItem">Privacy Policy</li>
            <li className="footerListItem">Terms of Use</li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottomItem">
            <p>&copy; { new Date().getFullYear() } Something. All rights reserved.</p>
        </div>
        <div className="footerBottomItem">
          <span>
            Made by Trịnh Đức Khang &amp; Nguyễn Văn Kỳ
          </span>
        </div>
      </div>
    </footer>
  );
};
