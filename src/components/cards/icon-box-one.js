/** @jsx jsx */
import { jsx, Box, Heading, Image } from "theme-ui";

const IconBoxOne = ({ data }) => {
  return (
    <Box sx={styles.cards}>
      <Image sx={styles.img} src={data.avatar} alt={data.avatar} />
      <Heading sx={styles.heading}>{data.heading}</Heading>
      <div>{data.text}</div>
    </Box>
  );
};

export default IconBoxOne;

const styles = {
  cards: {
    backgroundColor: "white",
    borderRadius: 5,
    p: "25px 35px 30px",
    boxShadow: "0px 13px 40px rgba(75, 102, 135, 0.1)",
    lineHeight: 1.51,
    ml: ["20px", 0],
    mt: [null, null, null, 6, 20],
    alignItems: "center",
    "@media screen and (min-width: 1441px) and (max-width:1980px)": {
      maxWidth: 700,
      minHeight: 250,
    },
    h2: {
      fontWeight: 700,
      fontSize: [2, null, null, null, 4],
      lineHeight: 1.5,
      color: "textSecondary",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    img: {
      maxWidth: [45, null, null, 30, 25, null, "100%"],
      "@media screen and (min-width: 1441px) and (max-width:1980px)": {
        maxWidth: 65,
      },
    },
  },
};
