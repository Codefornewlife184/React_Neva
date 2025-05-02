import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import 'jquery.easing';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";
import "./i18n";

// jQuery'yi global olarak tanımla
window.$ = window.jQuery = $;

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
