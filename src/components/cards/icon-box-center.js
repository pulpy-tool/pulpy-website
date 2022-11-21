/** @jsx jsx */
import { jsx, Box, Heading, Image } from "theme-ui";

const IconBoxCenter = ({ data }) => {
  return (
    <Box sx={styles.cards}>
      <Image sx={styles.img} src={data.avatar} alt={data.avatar} />
      <Heading sx={styles.heading}>{data.heading}</Heading>
      <div>{data.text}</div>
    </Box>
  );
};

export default IconBoxCenter;

const styles = {
  cards: {
    backgroundColor: "white",
    borderRadius: 5,
    p: "25px 35px 30px",
    lineHeight: 1.51,
    ml: ["20px", 0],
    mt: [null, null, null, 6, 20],
    alignItems: "center",
    textAlign: "center",
    "@media screen and (min-width: 1441px) and (max-width:1980px)": {
      maxWidth: 700,
      minHeight: 150,
    },
    h2: {
      fontWeight: 700,
      fontSize: [6, null, null, null, '44px'],
      lineHeight: 1.5,
      color: "textSecondary",
      textAlign: "center",
    },
    img: {
      maxWidth: [45, null, null, 30, 25, null, "100%"],
      "@media screen and (min-width: 1441px) and (max-width:1980px)": {
        maxWidth: 50,
      },
    },
  },
};
