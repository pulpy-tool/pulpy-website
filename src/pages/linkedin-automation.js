/** @jsx jsx */
import React from "react";
import { jsx, Grid, Container, ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import InnerBanner from "components/banner/banner";
import illustration from "assets/images/linkedin-automate.svg";
import LinkedInAutoPilot from "sections/linkedin-automation/autopilot";
import LinkedInAutoIntegration from "sections/linkedin-automation/integrate";
import LinkedInAutoFaq from "sections/linkedin-automation/faq";
import LinkedInAutoStarted from "sections/linkedin-automation/getstarted";
import IconBoxOne from "components/cards/icon-box-one";
import avatar1 from "../assets/images/BusinessOwners.svg";
import avatar2 from "../assets/images/Outreachicon.svg";
import avatar3 from "../assets/images/MarketingAgencies.svg";
import avatar4 from "../assets/images/Recruites.svg";
import { rgb, rgba } from "polished";

const iconboxonedata = [
  {
    id: 1,
    avatar: avatar1,
    heading: "Business Owners",
    text: "Make your prospecting and sales process easy by automating the entire process and focusing and putting more time on the other important aspects of developing your business.",
  },
  {
    id: 2,
    avatar: avatar2,
    heading: "Sales Teams",
    text: "Boost your sales team productivity by eliminating redundant tasks. Automate your lead generation process and help your sales team focus on closing more deals.",
  },
  {
    id: 3,
    avatar: avatar3,
    heading: "Marketing Agencies",
    text: "Agencies can set up prospecting campaigns in minutes, use hyper-personalization that your messages do not look automated and generate hot leads. Switch between LinkedIn accounts with just a few clicks, track everything from a single dashboard and skyrocket your agency's profit with Pulpy",
  },
  {
    id: 4,
    avatar: avatar4,
    heading: "Recruiters",
    text: "Reaching out to candidates in LinkedIn is now simple as you can target highly skilled potential employees for your company and reach out to them all at once with the help of Pulpy.",
  },
];

export default function LinkedinAutomation() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Pulpy | #1 Linkedin Automation and Prospecting Tool"
          description="Pulpy is the most advanced LinkedIn Automation Tool * Start Free Trail Now"
        />
        <section sx={styles.bannerSection}>
          <InnerBanner
            title="Play World Class Outreach game and Pump up your revenue with Pulpy"
            img={illustration}
            buttonLabel="Join the Waitlist"
          />
        </section>
        <LinkedInAutoPilot />
        <section sx={styles.bestfor}>
          <section sx={styles.section}>
            <Container>
              <Grid sx={styles.grid.Four}>
                {iconboxonedata?.map((data) => (
                  <IconBoxOne data={data} />
                ))}
              </Grid>
            </Container>
          </section>
        </section>
        <LinkedInAutoIntegration/>
        <LinkedInAutoFaq/>
        <LinkedInAutoStarted/>
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
  },
  bannerSection: {
    
    pt: [14, null, null, null, null, 0],
    pb: [6, null, null, 7, 11, 0],
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
    Four: {
      gridTemplateColumns: ["1fr 1fr"],
    },
  },
  bestfor: {
    backgroundColor: rgba("#ff8140", 0.2),
    minHeight: 150,
    pt: [80],
    pb: [80],
  },
};
