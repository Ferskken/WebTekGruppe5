import React from 'react';
import "../style/stylesheet.css";
import Review from "../reviews/Review";
import CoreValues from "../coreValues/coreValues";
import ProductReview from "../reviews/ProductReview";
import ContactCard from "../contacts/ContactCard";
import Footer from "../footer/Footer";
import ContactSection from "../contacts/ContactSection";

/**
 * Represents the landing page of
 */
export default class LandingPage extends React.Component {
    render() {
        return (
      <>
          <main className="center">

              <div id="secondHeader">
                  <img src={require("../pictures/rk2.png")} id="landingPagePic"  alt={"rodeKors2"}/>
              </div>
              <div className="infoBox">
                  <h4>Velkommen til Aalesund Røde Kors!</h4>
                  <br/>
                  <p>
                      Aalesund Røde Kors mobiliserer frivillighet gjennom rednings-
                      og beredskapsarbeid og omsorgsaktiviteter.
                      I Aalesund Røde Kors har vi aktiviteter innen Barnas Røde Kors,
                      Besøkstjeneste, Røde Kors Ungdom og Hjelpekorps.
                      Mange av våre aktiviteter holdes på Fellesverket.
                      Velkommen som deltaker eller frivillig i Aalesund Røde Kors!
                  </p>

                      <div className="destBox">
                          <p className="paragraphTitles">Hvordan nå oss?</p>
                          <br />
                          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                          <iframe id="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12571.378074826756!2d6.156333833808631!3d62.47223347610891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616da446b747bd3%3A0xb2493325ddba97e7!2s%C3%85lesund%20R%C3%B8de%20Kors%20Hjelpekorps!5e0!3m2!1sno!2sno!4v1653145504029!5m2!1sno!2sno"
                                  allowFullScreen="" loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                          />

                      <div className="destBox2">
                          <p className="paragraphTitles">Litt informasjon om oss:</p>
                          <br/>

                          <h4>Adresse:</h4>
                          <p>Keiser Wilhelmsgt. 68, 6003 ÅLESUND</p>
                          <hr className="destLines"/>
                          <br/>

                          <h4>E-post:</h4>
                          <p>aalesund@rodekors.org</p>
                          <hr className="destLines"/>
                          <br/>

                          <h4>Leder:</h4>
                          <p>Stian Henriksen</p>
                          <hr className="destLines"/>
                          <br/>

                          <h4>Nestleder:</h4>
                          <p>Nina Renate Vatnehol</p>
                          <hr className="destLines"/>
                          <br/>

                      </div>
              </div>

                  <div className="heartbeatBox">
                      <img src={require("../pictures/NHpG.gif")} className="heartbeatPic2"  alt={"heartbeatHeader"}/>
                  </div>

                 <CoreValues />

          </div>

              <ContactSection/>

              <Review />

          </main>

          <Footer />
      </>
        )
      }
}


