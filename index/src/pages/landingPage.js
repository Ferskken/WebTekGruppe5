import React from 'react';
import "../style/stylesheet.css";

export default class LandingPage extends React.Component {
    render() {
        return (
      <div>
          <nav>
              <div className="navbar">
                  <div className="container nav-container">
                      <input className="checkbox" type="checkbox" name={"navigationMenu"}/>
                      <div className="hamburger-lines">
                          <span className="line line1"/>
                          <span className="line line2"/>
                          <span className="line line3"/>
                      </div>
                      <div className="logo">
                          <h1><img src={require("../pictures/rk.jpg")}  alt={"rodeKors"}/></h1>
                      </div>
                      <ul className="menu-items" id={"menuList"}>
                          <li><a href={"aboutus.html"}>Om oss</a></li>
                          <li><a href={"products.html"}>Produkter</a></li>
                          <li><a href={"contacts.html"}>Kontakter</a></li>
                          <li><a href={"destinations.html"}>Destinasjoner</a></li>
                          <li><a href={"yourpage.html"}>Din side</a></li>
                      </ul>
                  </div>
              </div>
          </nav>

          <main className="center">

              <div id="secondHeader">
                  <img src={require("../pictures/rk2.png")} id="landingPagePic"  alt={"rodeKors2"}/>
              </div>

              <div id="infoBox">
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
              </div>

              <div className="offerRow">

                  <article className="articles">
                      <div className="offerColumn">
                          <div className="article_image">
                              <img className="offerPics" src={require("../pictures/flyktningsvenn.jpg")}  alt={"flyktningsvenn"}/>
                          </div>

                          <div className="article_text">
                              <div className="article_intro">
                                  <h3>Flyktningsvenn!</h3>
                                  <br/>
                                      <p>
                                          Lorem Ipsum is not simply random text.
                                          It has roots in a piece of classical Latin literature from 45 BC,
                                          making it over 2000 years old.
                                      </p>
                                  <br/>

                                  <a className="links1" href={"products.html"} >Les mer!</a>
                              </div>
                          </div>
                      </div>
                  </article>


                  <article className="articles">
                      <div className="offerColumn">
                          <div className="article_image">
                              <img className="offerPics" src={require("../pictures/besoeksvenn.jpg")}  alt={"besoksvenn"}/>
                          </div>
                          <div className="article_text">
                              <div className="article_intro">
                                  <h3>Besøksvenn!</h3>
                                  <br/>
                                      <p>
                                          Lorem Ipsum is not simply random text.
                                          It has roots in a piece of classical Latin literature from 45 BC,
                                          making it over 2000 years old.
                                      </p>
                                  <br/>

                                  <a className="links1" href={"products.html"}>Les mer!</a>

                              </div>
                          </div>
                      </div>
                  </article>


                  <article className="articles">
                      <div className="offerColumn">
                          <div className="article_image">
                              <img className="offerPics" src={require("../pictures/RKungdom.jpg")} alt={"Rkungdom"}/>
                          </div>
                          <div className="article_text">
                              <div className="article_intro">
                                  <h3>Rødekors ungdom!</h3>
                                  <br/>
                                      <p>
                                          Lorem Ipsum is not simply random text.
                                          It has roots in a piece of classical Latin literature from 45 BC,
                                          making it over 2000 years old.
                                      </p>
                                  <br/>

                                  <a className="links1" href={"products.html"}>Les mer!</a>

                              </div>
                          </div>
                      </div>
                  </article>

              <div className="card">
                  <div className="row">
                      <h4>Legg til en kommentar:</h4>
                      <div className="rating">
                          <input type="radio" name="rating" value="5" id="5" />
                          <label className="stars" htmlFor="5">☆</label>
                          <input type="radio" name="rating" value="4" id="4" />
                          <label className="stars" htmlFor="4">☆</label>
                          <input type="radio" name="rating" value="3" id="3" />
                          <label className="stars" htmlFor="3">☆</label>
                          <input type="radio" name="rating" value="2" id="2" />
                          <label className="stars" htmlFor="2">☆</label>
                          <input type="radio" name="rating" value="1" id="1" />
                          <label className="stars" htmlFor="1">☆</label>
                      </div>
                      <div className="comment-area">
                            <textarea className="form-control" placeholder="what is your view?" rows="4">
                            </textarea>
                      </div>

                      <div className="commentbtn">
                          <button className="cancelbtn">Avbryt</button>
                      </div>

                      <div className="commentbtn">
                          <button className="sendbtn">Send</button>
                      </div>
                  </div>
              </div>


              </div>

          </main>
      </div>
        )
      }
}


