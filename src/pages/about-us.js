/** @jsx jsx */
import React from "react";
import { jsx, ThemeProvider, Box, Grid, Text, Container, Image } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import InnerBanner from "components/banner/banner";
import Subscribe from 'sections/subscribe';
import Automateillustrate from "assets/images/Automate.svg";
import AboutUsImage from "assets/images/AboutUs.jpg";
import { rgba } from "polished";

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="About Pulpy"
          description="Pulpy provides high quality, unique premium data where you need it most: On social networks, the web, Salesforce or directly on your product."
        />
        <Box sx={styles.aboutus}>
        <Image src={AboutUsImage} alt="About Us" />
        <Text as="h2">
                  
                  This is US
        </Text>          
        </Box>
        <InnerBanner
          title="We Automate Marketing and Sales Pipeline"
          description={
            <div>
              All in one outreach platform to automate all your marketing and sales processes, squeeze in more leads and be flooded with an ocean of revenue.
            </div>
          }
          img={Automateillustrate}
          buttonLabel="Get Contacts"
        />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}

const styles = {
  aboutus: {
    position:'relative',
    h2: {
      width:'100%',
      color: "#ffffff",
      fontSize: ["20px", null, null, "36px", "31px", 10, 75],
      lineHeight: [1.33, 1.33, 1.26, null, 1.2, 1.3],
      letterSpacing: "-1px",
      letterSpacing: "-1px",
      fontWeight: 'Bold',
      position:'absolute',
      textAlign:'center',
      top:'15rem'
    },
    p: {
      color: "text",
      fontSize: [2, null, null, 3],
      textAlign: ["center"],
      maxWidth: 950,
    },
  },
  section: {
    minHeight: 500,
    alignItems: "center",
    display: ["grid"],
    
    Button:{
      display:['none'],
    }
  },
  
  
};
