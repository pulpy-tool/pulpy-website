/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import autopilot from '../../assets/images/autopilot.svg';



const LinkedInAutoPilot = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
        <Box sx={styles.illustration}>
            <Image src={autopilot} alt="workHard" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="LinkedIn Autopilot that do wonders for your sales"
              
            />
            <Box sx={styles.features}>
              <Text>Our Multifunctional Linked Automation tool is designed to help your sales and business development teams to improve prospecting and close more deals. With Pulpy, you can go beyond the limit and send 500+ connection requests per week without any risk to your LinkedIn account.<br/>

Work on multiple lead generation campaigns simultaneously and get more leads by setting up your own sales funnel as Pulpy works on the cloud and provide complete automation.</Text>
            </Box>
            <LearnMore label="Explore more" path="#!" />
          </Box>
          
        </Grid>
      </Container>
    </section>
  );
};

export default LinkedInAutoPilot;

const styles = {
  section: {
    pt: [6, null, null, 9, 7, 4, 9],
    pb: [8, null, null, 11, 0],
    minHeight: 700,
    alignItems: 'center',
  },
  grid: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['auto', null, null, '495px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0],
    h2: {
      color: 'heading',
      fontSize: ['24px', null, null, '36px', '31px', 10, 40],
      lineHeight: [1.33, 1.33, 1.26, null, 1.5, 1.26],
      letterSpacing: '-1px',
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: [24, null, null, 30, 25, null, '100%'],
      top: ['4px', '8px', null, null, '4px', '8px'],
      '@media screen and (min-width: 1441px) and (max-width:1600px)': {
        maxWidth: 35,
      },
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1],
    lineHeight: 2,
    ml: ['20px', 0],
    mt: [null, null, null, 6, 0],
    img: {
      mr: '10px',
      mt: '11px',
      minWidth:'20px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  illustration: {
    mt: [0],
    zIndex: '-1',
    img: {
      maxWidth: [null, null, null, "80%", "100%"],
      m: [null, null, null, "0 auto", 0],
    },
    '@media screen and (max-width: 767px)': {     
      width: '100%',
      minHeight: 500,
      marginBottom: 40,
    },
  },
};
