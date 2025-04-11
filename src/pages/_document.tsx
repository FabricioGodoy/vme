import { Html, Head, Main, NextScript } from "next/document";
import {Footer} from "../components/footer/footer";
/* import {NavBar} from "../components/navBar/navBar"; */

export default function Document() {
  return (
    <Html lang="en">
      <Head />
     {/*  <NavBar /> */}

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
