/** @jsx jsx */
import React from "react";
import {
  jsx,
  ThemeProvider,
} from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import InnerBanner from "components/banner/banner";
import illustration from "../assets/images/pulpyillustration.svg";
import VerifiedContact from "sections/contact-data/verified-contact"
import ProspectData from "sections/contact-data/prospect-data"
import EntireCommunity from "sections/contact-data/entire-community"
import ContactStats from "sections/contact-data/contact-stats";
import Pricing from "sections/pricing";



export default function ContactData() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Pulpy | B2B Database, Company Contacts, Hr Contacts & Business Leads"
          description="Pulpy provides high quality, unique premium data where you need it most: On social networks, the web, Salesforce or directly on your product."
        />
        <InnerBanner
          title="Do Smarter Sales with the more valuable data"
          description={
            <div>
              Reach out to right prospects with Pulpy’s contact data for global market and gather quality leads
            </div>
          }
          img={illustration}
          buttonLabel="Get Contacts"
        />
        
       <VerifiedContact/>
       <ProspectData/>
       <EntireCommunity/>
       <ContactStats/>
       <Pricing/>
      </Layout>
    </ThemeProvider>
  );
}

const styles = {
  heading: {
    mb: [7, null, null, 8, 9, 10],
    maxWidth: 950,
    h2: {
      color: "heading",
      fontSize: ["24px", null, null, "36px", "31px", 10, 40],
      lineHeight: [1.33, 1.33, 1.26, null, 1.5, 1.26],
      letterSpacing: "-1px",
      letterSpacing: "-1px",
    },
    p: {
      color: "text",
      fontSize: [2, null, null, 3],
      textAlign: ["center"],
      maxWidth: 950,
    },
  },
  section: {
    minHeight: 450,
    alignItems: "center",
  },
};
