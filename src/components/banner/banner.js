/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text, Image, Button } from "theme-ui";


const InnerBanner = ({ title, description, img, buttonLabel, video, ...props }) => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1">{title}</Heading>
            <Text as="p" sx={styles.description}>
              {description}
            </Text>
            {/* <Button >{buttonLabel}</Button> */}
          </Box>
          <Flex as="figure" sx={styles.bannerImage}>
            {<Image src={img} alt="illustration" />}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default InnerBanner;

const styles = {
  section: {
    pt: [14, null, null, null, null, 0],
    pb: [6, null, null, 7, 11, 0],
  },
  contentWrapper: {
    gap: ["50px 50px"],
    display: ["block", null, null, null, "grid"],
    gridTemplateColumns: [null, null, null, null, "1fr 1fr", "0.95fr 1.05fr"],
    alignItems: "center",
    minHeight: ["auto", null, null, null, "38vh", "100vh"],
    pt: [null, null, null, 8, 0, 9, null],
    "@media only screen and (min-width:1900px)": {
      pt: 10,
    },
  },
  bannerContent: {
    margin: [null, null, null, "0 auto", 0],
    maxWidth: [null, null, null, 600, "none"],
    textAlign: [null, null, null, "center", "left"],
    h1: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 45, null, 12, 14],
      lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
      letterSpacing: [0, null, null, null, "-1.5px"],
      color: "textSecondary",
      "@media screen and (min-width: 1441px) and (max-width:1980px)": {
        fontSize: 12,
        lineHeight: 1.2,
      },
    },
    p: {
      fontSize: [1, null, null, 2, 3],
      lineHeight: [1.5, null, null, 2, null, 2.33],
      color: "textSecondary",
      maxWidth: [470],
      m: [null, null, null, "30px auto", 0],
      mt: [3, null, null, null, 5],
    },
    button: {
      mt: [4],
    },
  },  
  bannerImage: {
    alignItems: "center",
    mt: [9, null, null, null, 0],
    img: {
      maxWidth: [null, null, null, "80%", "100%"],
      m: [null, null, null, "0 auto", "0 auto"],
    },
  },
};
