import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'rc-drawer/assets/index.css';
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.css';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

// import Loader from 'components/loader/loader';

export default function CustomApp({ Component, pageProps }) {
  // const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    initGA();
    logPageView();
    // setTimeout(() => setLoading(true), 3000);
    Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  
    
  }, []);

  return (
    <>    
      {/* {!loading ? (
        <React.Fragment>
           
        </React.Fragment>
      ) :(
        <Loader/>
      )} */}
       <Component {...pageProps} />
    
    </>
  );
}
