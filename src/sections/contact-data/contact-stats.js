/** @jsx jsx */
import { jsx, Grid, Container, } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import IconBoxCenter from "components/cards/icon-box-center";
import avatar1 from "../../assets/images/Contacts.svg";
import avatar2 from "../../assets/images/ValidatedEmail.svg";
import avatar3 from "../../assets/images/DirectDial.svg";
import avatar4 from "../../assets/images/MarketingExec.svg";
import avatar5 from "../../assets/images/SalesExecutive.svg";
import avatar6 from "../../assets/images/ClevelExecutive.svg";



const outreachdata = [
  {
    id: 1,
    avatar: avatar1,
    heading:'113M +',
    text: "AI-Curated Contacts in 195 Countries Worldwide",
  },  
  {
    id: 2,
    avatar: avatar2,
    heading:'64M +',
    text: "Validated Emails",
  },
  {
    id: 3,
    avatar: avatar3,
    heading:'34M +',
    text: "Direct Dials",
  },
  {
    id: 4,
    avatar: avatar4,
    heading:'4.0M',
    text: "Marketing Execs",
  },
  {
    id: 5,
    avatar: avatar5,
    heading:'7.3M +',
    text: "Sales Execs",
  },
  {
    id: 6,
    avatar: avatar6,
    heading:'2.6M +',
    text: "C-Level Execs",
  },
];

const ContactStats = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <SectionHeading
              sx={styles.heading}
              title="The World's Smartest B2B Contact Data"
            />
        </Grid>
        <Grid sx={styles.grid.Three}>
        {outreachdata?.map((data) => (
                <IconBoxCenter data={data} sx={styles.IconBoxOne} />
              ))}
          
        </Grid>
      </Container>
    </section>
  );
};

export default ContactStats;

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
    alignItems: 'center',
    Three: {      
      '@media screen and (min-width: 1024px) and (max-width:1600px)': {
        gridTemplateColumns: ["1fr 1fr 1fr"],
      },
    },
  },
  heading: {
    maxWidth: ['auto', null, null, '950px', 'auto'],    
    mb: ['20px'],
    ml: [0],
    h2: {
      color: 'heading',
      fontSize: ['24px', null, null, '36px', '31px', 10, 40],
      lineHeight: [1.33, 1.33, 1.26, null, 1.5, 1.26],
      textAlign:'center',
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
      display:'none',
    },
  },
  
};
