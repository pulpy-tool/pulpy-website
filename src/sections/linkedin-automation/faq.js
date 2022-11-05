/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import { LearnMore } from "components/link";
import Accordion from 'components/accordion/accordion';

const data = [
    {
      title: 'Is it safe to use Linkedin Prospecting tool?',
      contents: (
        <div>
          Absolutely - Pulpy has limitations and usage to comply with LinkedIn rules with a combination of advanced algorithms. Alongside that, we provide dedicated IP's which have led us to have a 0% ban rate.
        </div>
      ),
    },
    {
      title: 'Can I connect with CRM, Zapier etc.?',
      contents: (
        <div>
          Yes, you can. We use Zapier to integrate any CRM tools you use within your sales pipeline.
        </div>
      ),
    },
    {
      title: `How many connection invites I can send per day?`,
      contents: (
        <div>
         These figures may change, but we recommend about 40 invites per day.
        </div>
      ),
    },
    {
        title: `How is Pulpy is different from other tools?`,
        contents: (
          <div>
           Pulpy is a cloud-based automation tool using static IP’s to ensure a secure prospecting outreach while running on autopilot. With Pulpy you can set up integrations to get data from LinkedIn sent directly into your CRM system by using Zapier. We use advanced metrics, Google-Add on for reporting where you can sync dashboard data into a spreadsheet.
          </div>
        ),
      },
      {
        title: `Do I need a LinkedIn premium accounts?`,
        contents: (
          <div>
           You will need a LinkedIn premium account if you want to have access to an advanced search criteria with Sales Navigator. For normal accounts, you can only use basic search criteria as provided by LinkedIn.
          </div>
        ),
      },
      {
        title: `Do you have white-label solution for agency owners?`,
        contents: (
          <div>
           Yes, we do. To qualify for our whitelabel program, you need to have at least 10 clients on the platform.
          </div>
        ),
      },
      {
        title: `Can I stop message sequence at any time?`,
        contents: (
          <div>
          Yes, you can do it at any time.
          </div>
        ),
      },
      {
        title: `Do you have connection/InMail message templates?`,
        contents: (
          <div>
           Yes, we do. You can find these templates on our platform.
          </div>
        ),
      },
      {
        title: `What results can I expect?`,
        contents: (
          <div>
           The average LinkedIn invite acceptance rate is about 30%. The average positive reply rate across different clients 20-25% Note: Every industry/profile is different. There are multiple factors like your message copy, LinkedIn profile optimization, time, as well as target profile and industry.
          </div>
        ),
      },
      {
        title: `Do you have an affiliation program?`,
        contents: (
          <div>
           Yes, see the link in our footer or reach out to us and mention that you are interested in an affiliation program.
          </div>
        ),
      },
  ];
  

const LinkedInAutoFaq = () => {
  return (
    <section sx={styles.section}>
      <Container>        
        <SectionHeading
              sx={styles.heading}
              title="Frequently asked questions"
            />
          <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
      </Container>
    </section>
  );
};

export default LinkedInAutoFaq;

const styles = {
  section: {
    pt: [6, null, null, 9, 7, 4, 9],
    pb: [8, null, null, 11, 0],
    minHeight: 900,
    alignItems: "center",
    maxWidth: 950,
    m: ["0 auto"],
  },
  
  heading: {    
    textAlign: ["center", null, null, null, "center"],
    maxWidth: [null, null, null, 450, 950],
    mb: ["40px"],
    ml: [0],
    h2: {
      color: "heading",
      fontSize: ["24px", null, null, "36px", "31px", 10, 40],
      lineHeight: [1.33, 1.33, 1.26, null, 1.5, 1.26],
      letterSpacing: "-1px",
      letterSpacing: "-1px",
    },
    
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 450, 950],
  },
};
