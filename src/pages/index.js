import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import PremiumFeature from 'sections/premium-feature';
import AppFeature from 'sections/app-feature';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Pulpy | LinkedIn Automation and Prospect Tool"
          description="Pulpy is the most advanced LinkedIn Automation Tool * Start Free Trail Now"
        />
        <Banner />          
        <AppFeature />
        <PremiumFeature />       
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
