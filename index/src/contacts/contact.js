import React from "react";

export default function Contact() {
    return(

  <>
      <section className={"contactsBox"}>

      <p className="paragraphTitles">Kontakt vårt personell direkte.</p>
      <br/>

            <article className={"contact"}>
                <div className={"contactPicBox"}>
                 <img src={require("../pictures/contact1.jpg")} className="contactPic"  alt={"contactPicture"}/>
                </div>
                <div className={"contactInfoBox"}>
                   <p className={"contactName"}>Britt</p>
                   <br/>
                   <p className={"contactDescription"}>Som helsefag-arbeider for røde kors
                   jobber jeg daglig med mennesker som trenger hjelp, hos oss jobber vi
                    stadig slik at alle skal ha likt tilbud til hva enn det måtte gjelde.
                   </p>
                   <br/>
                   <hr className={"contactLine"}/>
                   <br/>
                   <p className={"contactEmail"}>Epost: Britt.rk@gmail.com</p>
                   <p className={"contactPhone"}>tlf: 12345678</p>
                </div>

            </article>

            <article className={"contact"}>
                <div className={"contactPicBox"}>
                 <img src={require("../pictures/contact2.jpg")} className="contactPic"  alt={"contactPicture"}/>
                </div>
                <div className={"contactInfoBox"}>
                   <p className={"contactName"}>Jonas</p>
                   <br/>
                   <p className={"contactDescription"}>Hei! mitt navn er Jonas og jeg jobber
                   til daglig som "chief of operations" hos røde kors hjemme i Ålesund.
                   Hverdagen min er aldri lik, jeg elsker å reise rundt for å
                   hjelpe de som trenger det aller mest.
                   </p>
                   <br/>
                   <hr className={"contactLine"}/>
                   <br/>
                   <p className={"contactEmail"}>Epost: Jonas.rk@gmail.com</p>
                   <p className={"contactPhone"}>tlf: 12345678</p>
                </div>
            </article>

             <article className={"contact"}>
                <div className={"contactPicBox"}>
                   <img src={require("../pictures/contact3.jpg")} className="contactPic"  alt={"contactPicture"}/>
                </div>
                <div className={"contactInfoBox"}>
                   <p className={"contactName"}>Milde</p>
                   <br/>
                   <p className={"contactDescription"}>Jobben min i røde kors er å tilby spesiellt
                   unge, men også voksne hjelp. Jeg er utdannet verne-pleier, men arbeidet varierer
                   stadig! Kontakt meg gjerne om det er noen eller noe som bekymrer deg.
                   </p>
                   <br/>
                   <hr className={"contactLine"}/>
                   <br/>
                   <p className={"contactEmail"}>Epost: Milde.rk@gmail.com</p>
                   <p className={"contactPhone"}>tlf: 12345678</p>
                </div>
             </article>

      </section>
  </>

    )
}