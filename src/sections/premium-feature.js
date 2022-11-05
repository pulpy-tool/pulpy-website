/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import leadgeneration from 'assets/images/leadgeneration.svg';

const data = [
  {
    title: 'Network Expansion',
    contents: (
      <div>
        We will help you establish connections with more members of your target market.
      </div>
    ),
  },
  {
    title: 'Engaging Content',
    contents: (
      <div>
        We will ensure that valuable content is consistently shared with your target market.
      </div>
    ),
  },
  {
    title: `Profile Optimisation`,
    contents: (
      <div>
        We’ll ensure that you have a strong, conversion-focused Linkedin profile.
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
        <Box sx={styles.rightContent}>
            <SectionHeading              
              sx={styles.heading}
              title="Our LinkedIn Lead Generation Services"
              description="We support incredible businesses in using LinkedIn to reach out to more of their ideal clientele. Our B2B Lead Generation solution has been strategically created to help you establish an online presence, effectively represent your business, and establish yourself as a thought-leader in your sector."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
          <Box as="figure" sx={styles.illustration}>
            <Image src={leadgeneration} alt="lead generation" />
          </Box>
          
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
    img: {
      maxWidth: [null, null, null, "50%", "100%"],
      m: [null, null, null, "0 auto", 0],
    },
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
