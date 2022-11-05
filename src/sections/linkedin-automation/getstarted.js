/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Button, Image, Text } from "theme-ui";




const LinkedInAutoStarted = () => {
  return (
    <section sx={styles.section}>
      <Container sx={styles.cardGroup}>
            <Box>
                <h2>Get started<br/> with Pulpy</h2>
                <p>Generate new qualified leads on LinkedIn. Expand your business. Increase your visibility.</p>
                <Button sx={styles.Button}>Start Your 14 days free trail</Button>
            </Box>
      </Container>
    </section>
  );
};

export default LinkedInAutoStarted;

const styles = {
  section: {
    pt: [8, null, null, 3, 8, 3, 10], 
    pb: [8, null, null, 3, 8, 3, 10],   
    alignItems: "center",
    minHeight: 400,
  },
  cardGroup: {
    backgroundColor: "white",
    borderRadius: 5,
    p: "25px 35px 30px",
    boxShadow: "0px 13px 40px rgba(75, 102, 135, 0.1)",
    lineHeight: 1.51,
    pb: [8, null, null, 3, 8, 3, 6], 
    h2: {
        fontWeight: 800,
        fontSize: [50, null, null, null, 55],
        lineHeight: 1.3,
        color: "textSecondary",
        textAlign: "center",
        m:"0",
      },
      p:{
        textAlign: "center",
      },
      Button: {
        textAlign: 'Center',
        m:'0 auto',
        display: ["table"]
      }
  },
  
};
