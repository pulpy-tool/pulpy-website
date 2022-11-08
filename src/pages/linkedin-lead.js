/** @jsx jsx */
import React from "react";
import {
  jsx,
  Grid,
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
    text: "Send out cold emails that are concise, personable, and effective",
  },
  {
    id: 3,
    avatar: avatar3,
    heading: "Execute Outreach",
    text: "Every month, send personalised messages to thousands of your prospective leads.",
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
    heading:'Prospects List Building',
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
    text: "Following the launch of your campaign, you may anticipate receiving dozens or even hundreds of hot leads each month that are created entirely automatically.",
  },
  {
    id: 2,
    avatar: avatar10,
    heading: "Dedicated Account Managers",
    text: "Our dedication to your success will be demonstrated via our support through weekly reports, monthly strategy calls, and continuous campaign enhancements.",
  },
  {
    id: 3,
    avatar: avatar11,
    heading: "Learn how to sell effectively on LinkedIn",
    text: `We're more than simply a tool for generating leads on LinkedIn. You'll learn all of our tricks and techniques for completing transactions on LinkedIn.`,
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
        <InnerBanner
          title="#1 LinkedIn Lead Generation Agency"
          description={
            <div>
              Scale your LinkedIn leads to predictably generate more revenue,
              100% done for you. <br />
              Pulpy sends tested, tailored messages to your dream clients on
              LinkedIn and receives favourable answers directly to your email by
              using data from hundreds of outbound B2B campaigns.
            </div>
          }
          img={illustration}
          buttonLabel="Lets Talk"
        />
        <SectionHeading
          sx={styles.heading}
          title="How we generate leads for client's"
          description={
            <div>
              We leverage high-performing data from hundreds of successfully
              completed LinkedIn campaigns across all industries to target and
              engage your most qualified decision makers, pushing them straight
              into your sales funnel.
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
              10X your LinkedIn sales outreach,
              <br />
              productivity, and outcomes
            </div>
          }
          description={
            <div>
              A dedicated LinkedIn SDR with powerful capabilities at a
              reasonable price. Our responsibility is to boost your output and
              ROI while also providing you with qualified leads.
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
              Utilize the best LinkedIn marketing specialists
              <br />
              to generate sales/leads
            </div>
          }
          description={
            <div>
              Continuous improvement is required to create the ideal LinkedIn
              outreach approach. Let our professionals assist you in finding
              untapped sales prospects.
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
          title={<div>Pricing for LinkedIn lead generation</div>}
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
    },
  },
  section: {
    minHeight: 450,
    alignItems: "center",
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
  }
};
