import React from 'react';
import "../style/stylesheet.css";
import Navbar from "../navigation/Navbar";
import Review from "../reviews/Review";
import ProductCard from "../products/ProductCard";
import CoreValues from "../coreValues/coreValues";

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
                  <p id="info">

                      Contrary to popular belief, Lorem Ipsum is not simply random text.
                      It has roots in a piece of classical Latin literature from 45 BC,
                      making it over 2000 years old. Richard McClintock,
                      a Latin professor at Hampden-Sydney College in Virginia,
                      looked up one of the more obscure Latin words, consectetur,
                      from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                      discovered the undoubtable source. Lorem Ipsum comes from sections
                      1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                      (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                      This book is a treatise on the theory of ethics, very popular during the Renaissance.
                      The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                      Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                      reproduced in their exact original form, accompanied by English versions from the 1914
                      translation by H. Rackham.

                  </p>


                      <div className="destBox">
                          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                          <iframe id="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12571.378074826756!2d6.156333833808631!3d62.47223347610891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616da446b747bd3%3A0xb2493325ddba97e7!2s%C3%85lesund%20R%C3%B8de%20Kors%20Hjelpekorps!5e0!3m2!1sno!2sno!4v1653145504029!5m2!1sno!2sno"
                                  allowFullScreen="" loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                          />

                      <div className="destBox2">
                          <h3>Litt informasjon om oss:</h3>
                          <br/>

                          <h4>Adresse:</h4>
                          <p>Keiser Wilhelmsgt. 68, 6003 ÅLESUND</p>
                          <hr className="destLines"/>
                          <br/>

                          <h4>E-post:</h4>
                          <p>************@rodekors.org</p>
                          <hr className="destLines"/>
                          <br/>

                          <h4>Leder:</h4>
                          <p>**** ********</p>
                          <hr className="destLines"/>
                          <br/>

                          <h4>Nestleder:</h4>
                          <p>******* *****</p>
                          <hr className="destLines"/>
                          <br/>

                      </div>
              </div>

                  <div className="heartbeatBox">
                      <img src={require("../pictures/heartbeat.png")} className="heartbeatPic2"  alt={"heartbeatHeader"}/>
                  </div>

                 <CoreValues />

          </div>

              <Review />

          </main>
      </>
        )
      }
}


