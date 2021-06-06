import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <h4>Copyright @ {currYear}</h4>
    </footer>
  );
}

export default Footer;
