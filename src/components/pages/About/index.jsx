import React, { Component } from "react";

// Custom CSS
import "./about.scss";

// Organisms
import HalfPageIntro from '../../organisms/HalfPageIntro'
import Section from "../../organisms/Section";
import SectionText from "../../organisms/SectionContents/SectionText.jsx";
import Footer from "../../organisms/Footer";


// Modals
import CookieModal from "../../organisms/CookieModal";


import logo_dark from "../Homepage/black.png";
import logo_light from "../Homepage/light.png";

// Replace with CMS data
import myTextFile from './text.txt'
export const navitems = [
  { href: "/#why", text: "Warum PHARMAZIEGASSE®?", active: false, type: "text"},
  {
    href: "/#method",
    text: "Wie funktioniert es?",
    active: false,
    type: "text"
  },
  { href: "/#pricing", text: "Preise", active: false, type: "text" },
  { href: "/#about", text: "Über uns", active: false, type: "text" },
  { href: "/getting-started", text: "Loslegen", active: false, type: "button" }
];

export const logos = [{ light: logo_light, dark: logo_dark }];
export const sociallinks = [
  { fb: "https://www.facebook.com/Friends-of-Pharmaziegasse-309175709736059/", ig: "https://www.instagram.com/friendsofpharmaziegasse/" }
];
export const companyinfo = [
  {
    city: "Klagenfurt",
    zip: "9020",
    address: "Pharmaziegasse 5",
    phone: "+43 463 45 904-0",
    email: "office@pharmaziegasse.at",
    copyrightholder: "Pharmaziegasse"
  }
];

class About extends Component{
  constructor(){
    super();

    this.state = {
      data: ''
    }
    this.getContent();
  }
  getContent = () => {
    fetch(myTextFile)
      .then((response) => response.text())
      .then(data => {
        this.setState({ data })
      }
    );
  }

  
  render() {
      return (
        <main className="About">
          <HalfPageIntro
            logos={logos}
            navitems={navitems}
            theme="L"
          />
          <Section sectionid="about" background="BLUE" data-id="0">
            <SectionText
              content={[
                { heading: "Impressum" },
                { paragraph: this.state.data }
              ]}
            />
          </Section>
           <div className="container"><div id="map-container-google-11" class="z-depth-1-half map-container-6">
              <iframe className="w-100 h-100" src="https://maps.google.com/maps?q=Pharmaziegasse 5&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0" allowfullscreen></iframe>
            </div>
            </div>
          <Footer
            sociallinks={sociallinks}
            companyinfo={companyinfo}
            logo={logos[0].dark}
          />
          <CookieModal />
        </main>
    )
  }
}

export default About;
