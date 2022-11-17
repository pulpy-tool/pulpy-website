/** @jsx jsx */
import { jsx, Flex, Grid, Box, Text, Container, Image } from "theme-ui";
import { Link, NavLink } from "components/link";
import Logo from "../../assets/images/logo-white.svg";
import Router from 'next/router';
import socialicon from "../../assets/images/icons/facebook.png";
import socialicon1 from "../../assets/images/icons/twitter.png";
import socialicon2 from "../../assets/images/icons/linkedin.png";

const handler = route =>
  Router.push({
    pathname: `/${route}`
  })

const socialLinks = [
  {
    path: "https://www.facebook.com/pulpy",
    avatar: socialicon,
  },
  {
    path: "https://twitter.com/InfoPulpy",
    avatar: socialicon1,
  },
  {
    path: "https://www.linkedin.com/company/pulpy-io/",
    avatar: socialicon2,
  },
];

const footerLinksOne = [
  {
    path: "about-us",
    label: "About Us",
  },
  {
    path: "#",
    label: "Blog",
  },
];
const footerLinksTwo = [
  
  {
    path: "linkedin-automation",
    label: "LinkedIn Automation",
  },
  {
    path: "contact-data",
    label: "Contact Data",
  },
];
const footerLinksServices = [
  
  {
    path: "linkedin-services",
    label: "LinkedIn Services",
  },
  
];
const footerLinksThree=[
  {
    path: "terms-conditions",
    label: "Terms and Conditions",
  },
  {
    path: "privacy-policy",
    label: "Privacy Policy",
  },
]

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Grid sx={styles.grid.Four}>
          <Box>
            <div sx={styles.imgfluid}>
              <img src={Logo} />
            </div>
            <Text as="span">
              Generate leads on autopilot and accelerate sales pipeline with
              Pulpy
            </Text>
            <Box as="ul" sx={styles.footerNav}>
              {socialLinks?.map((item, index) => (
                <li key={index}>
                  <Link path={item?.path} passHref={true} target="_blank" rel="noopener noreferrer">
                    <img src={item?.avatar} />
                  </Link>
                </li>
              ))}
            </Box>
          </Box>
          <Box>
            <Text as="h5">24/7 Support</Text>
            <Box as="ul" sx={styles.footerNav}>
              <a href="mailto:info@pulpy.io">info@pulpy.io</a>
            </Box>
          </Box>
          <Box>
            <Text as="h6">Company</Text>
            <Box as="ul" sx={styles.footerMenu}>
              {footerLinksOne?.map((item, index) => (
                <li key={index}>
                  <NavLink path={item?.path} label={item?.label} onClick={() => handler(item?.path)} />
                </li>
              ))}
            </Box>
          </Box>
          <Box>
            <Text as="h6">Products</Text>
            <Box as="ul" sx={styles.footerMenu}>
              {footerLinksTwo?.map((item, index) => (
                <li key={index}>
                  <NavLink path={item?.path} label={item?.label} onClick={() => handler(item?.path)} />
                </li>
              ))}
            </Box>
            <Text as="h6">Services</Text>
            <Box as="ul" sx={styles.footerMenu}>
              {footerLinksServices?.map((item, index) => (
                <li key={index}>
                  <NavLink path={item?.path} label={item?.label} onClick={() => handler(item?.path)} />
                </li>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid sx={styles.grid.Three}>
          <Text as="span" sx={styles.copyright}>
            &copy; Copyright by {new Date().getFullYear()} Pulpy Technologies,
            Inc
          </Text>
          <Box as="ul" sx={styles.footerhorizontalmenu}>
          {footerLinksThree?.map((item, index) => (
                <li key={index}>
                  <NavLink path={item?.path} label={item?.label} onClick={() => handler(item?.path)} />
                </li>
              ))}
              </Box>
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: "#161a37",
    pt: [7],
    pb: [6],
    minHeight: 300,
    span: {
      color: "white",
      fontSize: 1,
      lineHeight: "18px",
    },
    h5: {
      color: "white",
      fontSize: 4,
      fontWeight: "900",
      lineHeight: "18px",
      marginBottom: "1.5rem",
    },
    h6: {
      color: "white",
      fontSize: 4,
      fontWeight: "900",
      lineHeight: "18px",
      marginBottom: "1.5rem",
    },
    a: {
      color: "white",
      fontSize: 1,
      lineHeight: "18px",
      textDecoration: "none",
    },
  },
  grid: {
    gap: [0, 0, 0, 0, 10, 20],
    display: ["flex"],
    alignItems: "center",
    flexDirection: ["column-reverse", null, null, "column", "row"],
    Three: {
      '@media screen and (min-width: 1024px) and (max-width:1600px)': {
        gridTemplateColumns: ["1fr 1fr 1fr"],
      },
    },
    Four: {      
      '@media screen and (min-width: 1024px) and (max-width:1600px)': {
        gridTemplateColumns: ["1fr 1fr 1fr 1fr"],
      },
    },
  },
  imgfluid:{
    img:{
      width: "115px",
      pb:[3],
    }
  },
  copyright: {
    alignItems: "center",
    pt: [6],
  },
  footerMenu: {
    listStyle: "none",
    mt: [2],
    mb: [2],
    p: 0,
    li: {
      "+ li": {
        ml: [0, null, null, null, 0],
        lineHeight: 2.85,
      },
      a: {
        color: "white",
        cursor: "pointer",
        textDecoration: "none",
        fontSize: [1, null, null, 2],

        img: {
          width: "24px",
        },
      },
    },
  },
  footerhorizontalmenu:{
    listStyle: "none",
    display: "flex",
    mt:[5],
    li: {
      ml: [3, null, null, null, 4],
    },
    a: {
      cursor:"pointer",
    },
  },
  footerNav: {
    listStyle: "none",
    display: "flex",
    flexDirection: ["row", "row", "row", "row", "row"],
    mt: [2],
    m: ["25px 0 0", null, null, null, "25 0 0"],
    p: 0,
    li: {
      "+ li": {
        ml: [3, null, null, null, 4],
      },
      a: {
        color: "white",
        cursor: "pointer",
        textDecoration: "none",
        fontSize: [1, null, null, 2],
        img: {
          width: "24px",
        },
      },
    },
  },
};
