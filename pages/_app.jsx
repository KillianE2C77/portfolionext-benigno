import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import AOS from "aos";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
