/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import contactImage from '../assets/images/Contact-View-Details.png';
import check from '../assets/images/icons/check-circle.png';

const data = [
  {
    id: 1,
    label: 'Reach out to ideal prospects with pinpoint accuracy.',
  },
  {
    id: 2,
    label: 'Access professional profiles along with their job responsibilities, work experience, education, and social media profile links',
  },
  {
    id: 3,
    label: 'Also receive alerts when target profiles are updated.',
  },
];

const ProspectData = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
        <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Prospect, Connect, Close, Repeat"
            />
            <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: 'flex-start' }}>
                  <Image src={check} sx={styles.icon} alt="check icon" />
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
            </Box>
            <LearnMore label="Get Contacts" path="#!" />
          </Box>
        <Box sx={styles.illustration}>
            <Image src={contactImage} alt="workHard" />
          </Box>
          
          
        </Grid>
      </Container>
    </section>
  );
};

export default ProspectData;

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
    lineHeight: 2.85,
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
