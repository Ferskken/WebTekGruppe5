import React from "react";

export default function CoreValues() {

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function dropFunction() {
  document.getElementById("coreValuesDrop").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdownBtn')) {
    var dropdowns = document.getElementsByClassName("coreValuesContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    return (

            <div className="coreValues">

                  <button onClick={"dropFunction()"} className="dropdownBtn">Kjerneverider:</button>

                          <div id="coreValuesDrop" className="coreValuesContent">
                              <h4>mimimi</h4>
                              <br/>
                              <p>mimimimi</p>
                          </div>
            </div>
    )
}