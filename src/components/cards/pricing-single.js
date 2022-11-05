/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Button, Image, Text } from "theme-ui";
import check from "assets/images/icons/check-circle.png";

const data = [
  {
    id: 1,
    label: "Unlimited Prospects Per Month",
  },
  {
    id: 2,
    label: "Unlimited outreach campaigns",
  },
  {
    id: 3,
    label: "Thousands of messages monthly",
  },
  {
    id: 4,
    label: "Multifunctional Automation",
  },
  {
    id: 5,
    label: "Proven done-for-you campaigns",
  },
  {
    id: 6,
    label: "Outreach messages crafted",
  },
  {
    id: 7,
    label: "Ideal decision makers identified",
  },
  {
    id: 8,
    label: `Qualified prospect list
    built`,
  },
  {
    id: 9,
    label: "Ongoing campaign optimization",
  },
  {
    id: 10,
    label: "LinkedIn profile optimizations",
  },
  {
    id: 11,
    label: "Connection nurture campaigns",
  },
  {
    id: 12,
    label: "10+ messages per sequence",
  },
  {
    id: 13,
    label: "A/B testing campaigns",
  },
  {
    id: 14,
    label: "Easy-to-use client dashboard",
  },
  {
    id: 15,
    label: "Dashboard setup and training",
  },
  {
    id: 16,
    label: "Advanced campaign metrics",
  },
  {
    id: 17,
    label: "Smart LinkedIn messaging inbox",
  },
  {
    id: 18,
    label: `CRM integration via
    Zapier`,
  },
  {
    id: 19,
    label: "LinkedIn lead generation course",
  },
  {
    id: 20,
    label: "Advanced guides and tutorials",
  },
  {
    id: 21,
    label: `Email, chat, phone support`,
  },
];

const SinglePricing = () => {
  return (
    <section sx={styles.section}>
      <Container sx={styles.cardGroup}>
        <Grid sx={styles.grid}>
        <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: "flex-start" }}>
                  <Image src={check} alt="check icon" />
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
            </Box>
          <Box sx={styles.rightContent}>
            <Box sx={styles.cards}>
                <Text as="h2">$ 1999</Text>
                <Button>Get Started Today</Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default SinglePricing;

const styles = {
  section: {
    pt: [3, null, null, 3, 4, 3, 2],
    pb: [8, null, null, 11, 0],
    alignItems: "center",
  },
  grid: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ["flex", null, null, null, "grid"],
    flexDirection: ["column-reverse", null, null, "column", "row"],
    gridTemplateColumns: ["3fr 1fr"],
    alignItems: "center",
  },
  features: {
    columnCount: [1, 2, 3],
    lineHeight: 2.81,
    ml: ["20px", 0],
    mt: [null, null, null, 6, 0],
    img: {
      mr: "10px",
      mt: "11px",
    },
    "+ a": {
      mt: "25px",
      ml: ["20px", 0],
    },
  },
  cardGroup: {
    backgroundColor: "white",
    borderRadius: 5,
    p: "25px 35px 30px",
    boxShadow: "0px 13px 40px rgba(75, 102, 135, 0.1)",
    lineHeight: 1.51,
    h2: {
        fontWeight: 900,
        fontSize: [50, null, null, null, 72],
        lineHeight: 1.5,
        color: "textSecondary",
        textAlign: "center",
      },
      Button: {
        textAlign: 'Center',
        m:'0 auto',
        display: ["table"]
      }
  },
  
};
