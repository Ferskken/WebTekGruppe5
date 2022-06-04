import React from "react"
import ContactCard from "./ContactCard";

export default function ContactSection() {

    return(
        <>
            <section className={"contactsBox"}>

                <p className="paragraphTitles">Kontakt vårt personell direkte.</p>
                <br/>

                <ContactCard id={1}
                             name={"Britt"}
                             description={"Som helsefag-arbeider for røde kors\n" +
                                 "                   jobber jeg daglig med mennesker som trenger hjelp, hos oss jobber vi\n" +
                                 "                    stadig slik at alle skal ha likt tilbud til hva enn det måtte gjelde."}
                             email={"Epost: Britt.rk@gmail.com"}
                             number={"tlf: 12345678"}/>

                <ContactCard id={2}
                             name={"Jonas"}
                             description={"Hei! mitt navn er Jonas og jeg jobber\n" +
                                 "                   til daglig som \"chief of operations\" hos røde kors hjemme i Ålesund.\n" +
                                 "                   Hverdagen min er aldri lik, jeg elsker å reise rundt for å\n" +
                                 "                   hjelpe de som trenger det aller mest."}
                             email={"Epost: Jonas.rk@gmail.com"}
                             number={"tlf: 12345678"}/>

                <ContactCard id={3}
                             name={"Milde"}
                             description={"Jobben min i røde kors er å tilby spesiellt\n" +
                                 "                   unge, men også voksne hjelp. Jeg er utdannet verne-pleier, men arbeidet varierer\n" +
                                 "                   stadig! Kontakt meg gjerne om det er noen eller noe som bekymrer deg."}
                             email={"Epost: Milde.rk@gmail.com"}
                             number={"tlf: 12345678"}/>

            </section>
        </>

)
}