import '@/styles/globals.css'
import Head from 'next/head'


export default function About() {
    return (
      <div>
        <Head>
        <title>My page about</title>
      </Head>
        <h1 className='tituloabout'>Sobre mí</h1>
        
        <p>Esta es la página about.</p>

        <a href="/">
        Ir a INICIO
      </a>


      </div>
    );
  }