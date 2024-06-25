import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-primary text-white py-5 text-center opacity-85 mt-5"
      style={{ minWidth: "320px" }}
    >
      <div className="max-w-4xl mx-auto">
        <p>© 2024 Mi Empresa. Todos los derechos reserva2.</p>
        <p>Contacto: </p>
        <div className="flex justify-center items-center gap-5">
          <a
            href="https://www.linkedin.com/in/tomas-emiliano-avila/"
            target="_blank"
          >
            <img src="/linkedin.png" className="h-10 w-auto" />
          </a>
          <a href="https://w.app/tomysykess" target="_blank">
            <img src="/wsp.png" className="h-10 w-auto" />
          </a>
          <a
            href="https://www.instagram.com/tomysykess?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <img src="/ig.png" className="h-10 w-auto" />
          </a>
          <a href="https://twitter.com/fxckngdeathwish" target="_blank">
            <img src="/tw.png" className="h-10 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
