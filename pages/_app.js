import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return (
      Component.getLayout(<Component {...pageProps} />)
    )
  };

  return <>
            <Head>
              <title>Next Js App</title>
              <meta name="description" content="This is Next Js App" />
            </Head>

            <Header/>
            <Navbar/>
            <Component {...pageProps} />
        </>
  
}

export default MyApp
