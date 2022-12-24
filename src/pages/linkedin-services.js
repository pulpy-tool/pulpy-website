/** @jsx jsx */
import React from "react";
import {
  jsx,
  Grid,
 Link,
  Button,
  Container,
  ThemeProvider,
} from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import InnerBanner from "components/banner/banner";
import illustration from "assets/images/pulpyillustration.svg";
import SectionHeading from "components/section-heading";
import IconBoxOne from "components/cards/icon-box-one";
import IconBoxTwo from "components/cards/icon-box-two";
import SinglePricing from "components/cards/pricing-single"
import avatar1 from "../assets/images/findprospects.svg";
import avatar2 from "../assets/images/WrittenMessages.svg";
import avatar3 from "../assets/images/Outreachicon.svg";
import avatar4 from "../assets/images/CloseDeals.svg";
import avatar5 from '../assets/images/ProspectList.svg';
import avatar6 from '../assets/images/ABTesting.svg';
import avatar7 from '../assets/images/PersonalizedOutreach.svg';
import avatar8 from '../assets/images/DataDriven.svg';
import avatar9 from '../assets/images/Hotleads.svg';
import avatar10 from '../assets/images/DedicatedManages.svg';
import avatar11 from '../assets/images/SellLinkedIn.svg';
import { rgb, rgba } from 'polished';

const iconboxonedata = [
  {
    id: 1,
    avatar: avatar1,
    heading: "Find Prospects",
    text: "We create targeted and qualified lists of your prospective leads on LinkedIn.",
  },
  {
    id: 2,
    avatar: avatar2,
    heading: "Write Messages",
    text: "Write and send cold outreach messages on LinkedIn that are concise, personalised, and effective",
  },
  {
    id: 3,
    avatar: avatar3,
    heading: "Execute Outreach",
    text: "Every month, send personalised messages to thousands of your prospective leads on Linkedin",
  },
  {
    id: 4,
    avatar: avatar4,
    heading: "Close Deals",
    text: "You are informed right away when leads reply so you can complete the transaction.",
  },
];
const outreachdata = [
  {
    id: 1,
    avatar: avatar5,
    heading:'Building Prospects List',
  },  
  {
    id: 2,
    avatar: avatar6,
    heading:'A/B Testing',
  },
  {
    id: 3,
    avatar: avatar7,
    heading:'Personalized Outreach',
  },
  {
    id: 3,
    avatar: avatar8,
    heading:'Data-driven strategy',
  },
];
const leaddata = [
  {
    id: 1,
    avatar: avatar9,
    heading: "Attract hundreds of hot leads on LinkedIn",
    text: "You may anticipate receiving dozens or even hundreds of hot leads each month that are generated completely on auto-pilot, following the launch of your lead generation campaign. ",
  },
  {
    id: 2,
    avatar: avatar10,
    heading: "Dedicated Account Managers",
    text: "We demonstrate our dedication to your success via our support through weekly reports, monthly strategy calls, continuous campaign enhancements, and LinkedIn Optimization.",
  },
  {
    id: 3,
    avatar: avatar11,
    heading: "Learn how to sell effectively on LinkedIn",
    text: `We're more than simply a tool for generating leads on LinkedIn. You'll learn all our tricks and techniques for completing transactions on LinkedIn`,
  },
];



export default function LinkedinPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Pulpy | LinkedIn Lead Generation Services"
          description="Pulpy is the most advanced LinkedIn Automation Tool * Start Free Trail Now"
        />
        <section sx={styles.linkedinServices}>
        <Container>
        <SectionHeading
          sx={styles.heading}
          title="LinkedIn Lead Generation Service & Agency for SaaS companies"
          description={
            <div>              
              We send tailored messages to your dream prospects/clients, help you receive favourable responses directly to your Linkedin inbox by using data from hundreds of outbound B2B campaigns and scale your sales & revenue.
            </div>
          }
        />
        <Button
                className="getStarted"
                css={{
                  backgroundColor: "#FF8140",
                }}
                as={Link}
               
                target={"_blank"}
            href="https://app.apollo.io/#/meet/pulpy"
              >
                Get Started Today
              </Button>
        </Container>
        </section>
        <SectionHeading
          sx={styles.heading}
          title="How we generate leads on LinkedIn for clients"
          description={
            <div>
              We leverage high-performing data from hundreds of successfully completed LinkedIn Lead Generation campaigns across all industries to target and engage your most qualified decision makers, pushing them straight into your sales funnel.
            </div>
          }
        />
        <section sx={styles.section}>
          <Container>
            <Grid sx={styles.grid.Four}>
              {iconboxonedata?.map((data) => (
                <IconBoxOne data={data} />
              ))}
            </Grid>
          </Container>
        </section>
        <SectionHeading
          sx={styles.heading}
          title={
            <div>
              Improve your LinkedIn Outreach, Responses, Productivity, Sales and Efficiency
            </div>
          }
          
        />
         <section sx={styles.section}>
          <Container>
            <Grid sx={styles.grid.Four}>
              {outreachdata?.map((data) => (
                <IconBoxTwo data={data} />
              ))}
            </Grid>
          </Container>
        </section>
        <SectionHeading
          sx={styles.heading}
          title={
            <div>
              Utilize the best LinkedIn Experts and Lead Generation Specialists to generate leads and close more deals

            </div>
          }
          description={
            <div>
              Continuous improvement is required to create the ideal LinkedIn outreach approach that generates leads on autopilot. Let our LinkedIn Lead Generation experts assist you in finding the right yet untapped prospects.
            </div>
          }
        />
        <section sx={styles.section}>
          <Container>
            <Grid sx={styles.grid.Three}>
              {leaddata?.map((data) => (
                <IconBoxOne data={data} />
              ))}
            </Grid>
          </Container>
        </section>
        <section sx={styles.pricing}>
        <SectionHeading
          sx={styles.heading}
          title={<div>Get Started for LinkedIn lead generation</div>}
          description={
            <div>
              No commitments; month-to-month. Discounts are offered for 3-6
              month advance purchases and subscriptions with multiple users. For
              more information about our current promotion, arrange a free
              consultation.
            </div>
          }
        />
        <SinglePricing/>
        </section>
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
      lineHeight: '1.7',
    },
  },
  section: {
    minHeight: 450,
    alignItems: "center",
    textAlign: 'center',
  },
  linkedinServices:{
    minHeight: 450,
    alignItems: "center",
    textAlign: 'center',
    h2:{
      color: "heading",
      marginTop: [7, null, null, 8, 9, 200],
    },
    getStarted:{
      margin: '0 auto',
      padding: '20px',
      display: 'table',
      width:'100%',
    },
  },
  grid: {
    gap: [0, 0, 0, 0, 10, 20],
    display: ["flex"],
    alignItems: "center",
    flexDirection: ["column-reverse", null, null, "column", "row"],
    Three: {
      gridTemplateColumns: ["1fr 1fr 1fr"],
    },
    Four: {
      gridTemplateColumns: ["1fr 1fr 1fr 1fr"],
    },
  },
  pricing: {
    backgroundColor: rgba('#dadada', 0.3),
    minHeight:150,
    pt: [40],
    pb: [40]
  },
  
};
