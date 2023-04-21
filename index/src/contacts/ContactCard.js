import React from "react";

/**
 * A contact card on the frontpage, representing a person working for Røde kors.
 * @param props from the ContactSection component.
 * @returns {JSX.Element}
 * @constructor
 */
export default function ContactCard(props) {
    return(
            <article className={"contact"}>
                <div className={"contactPicBox"}>
                    <img src={require("../pictures/contact" + props.id + ".jpg")} className="contactPic"  alt={"contactPicture"}/>
                </div>
                <div className={"contactInfoBox"}>
                    <p className={"contactName"}>{props.name}</p>
                    <br/>
                    <p className={"contactDescription"}>{props.description}
                    </p>
                    <br/>
                    <hr className={"contactLine"}/>
                    <br/>
                    <p className={"contactEmail"}>{props.email}</p>
                    <p className={"contactPhone"}>{props.number}</p>
                </div>

            </article>
    )
}