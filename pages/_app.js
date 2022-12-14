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
            <Header/>
            <Navbar/>
            <Component {...pageProps} />
        </>
  
}

export default MyApp
