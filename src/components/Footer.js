import React, { Fragment } from "react";

const Footer = ({ fecha }) => {
  return (
    <Fragment>
      <p>Todos los derechos reservados &copy; {fecha}</p>
    </Fragment>
  );
};

export default Footer;
