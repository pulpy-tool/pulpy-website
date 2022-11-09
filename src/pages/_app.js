import { useState, useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'rc-drawer/assets/index.css';
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.css';
import 'assets/css/styles.css';
import Loader from 'components/loader/loader';

export default function CustomApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    initGA();
    logPageView();
    setTimeout(() => setLoading(true), 3000);
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <>    
      {!loading ? (
        <React.Fragment>
            <Component {...pageProps} />
        </React.Fragment>
      ) :(
        <Loader/>
      )}
    
    </>
  );
}
