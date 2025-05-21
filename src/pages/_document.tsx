import { Html, Head, Main, NextScript } from "next/document";
import {Footer} from '../components/footer/footer';
import {NavBar} from '../components/navBar/navBar';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>Pagina Principal</title>
      </Head>
      <NavBar />
      <body>
    <span className="containersarasa">
      <span>01</span>
      <span>02</span>
      <span>03</span>
    </span>
        <Main />
        <NextScript />
      </body>
      <Footer />

    </Html>
  );
}
