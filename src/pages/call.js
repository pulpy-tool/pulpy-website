/** @jsx jsx */
import React from "react";
import {
  jsx,
  ThemeProvider,
  Box,
  Grid,
  Button,
  Select,
  Input,
  Container,
} from "theme-ui";
import { Text } from "@nextui-org/react";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import InnerBanner from "components/banner/banner";
import Callillustrate from "../assets/images/callillustration.svg";
import { rgba } from "polished";
import { useState, useEffect } from "react";


export default function FreeConsultation({ buttonLabel, ...props }) {
  
  
  
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [companysize, setCompaniesize] = useState("");
  const [whatsgoal, setWhatsgoal] = useState("What is your Goal?");
  const [title, setTitle] = useState("");
  const [mobile, setMobile] = useState("");

  const [errors, setErrors] = useState({});

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);


  let handleFullNameChange =(e) =>{
    let inputValue = e.target.value;
    setFullname(inputValue);
  }
  let handleemailChange =(e) =>{
    let inputValue = e.target.value;
    setEmail(inputValue);
  }
  let handleCompanyChange =(e) =>{
    let inputValue = e.target.value;
    setCompanyname(inputValue);
  }
  let handleCompanySizeChange =(e) =>{
    let inputValue = e.target.value;
    setCompaniesize(inputValue);
  }
  let handleWhatsGoalChange =(e) =>{
    let inputValue = e.target.value;
    setWhatsgoal(inputValue);
  }
  let handleTitleChange =(e) =>{
    let inputValue = e.target.value;
    setTitle(inputValue);
  }
  let handleMobileChange =(e) =>{
    let inputValue = e.target.value;
    setMobile(inputValue);
  }

  const handleValidation =(e) =>{
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0){
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0){
      tempErrors["email"] = true;
      isValid = false;
    }
    if (mobile.length <= 0){
      tempErrors["mobile"] = true;
      isValid = false;
    }

    setErrors({...tempErrors});

    return isValid;
  };

  const handleSubmit = async (e) => { 
    e.preventDefault()

    let isValidForm = handleValidation();
    
    let data = {
      fullname,
      email,
      }

    if(isValidForm) {
      
      const res = await fetch('./api/call', {
        body: JSON.stringify(data),        
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        method: 'POST',
      });

      
      
      const { error } = await res.json();

      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        

        // Reset form fields
        setFullname("");
        setEmail("");     
        setCompaniesize("");
        setCompanyname("");
        setMobile("");
        setTitle("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
       //Reset form fields
        setFullname("");
        setEmail("");     
        setCompaniesize("");
        setCompanyname("");
        setMobile("");
        setTitle("");
      
    }
    
 
  
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Book A Call With The Team At Pulpy - Pulpy Leads"
          description="Pulpy provides high quality, unique premium data where you need it most: On social networks, the web, Salesforce or directly on your product."
        />
        <Box sx={styles.FreeConsultation}>
          <InnerBanner
            title="Book A Call With The Team At Pulpy Leads"
            description={
              <div>
                Let us show you how the Pulpy team can help you reach the right
                decision makers and close more deals.
              </div>
            }
            img={Callillustrate}
          />
        </Box>
        <Box as="form" onClick={(e)=>{handleSubmit(e)}} sx={styles.section} method="post" >
          <Container>
            <Grid >
              <Grid>
                <Input
                  type="email"
                  placeholder="Enter Email address"
                  value={email}
                  onChange={handleemailChange}
                  required
                  
                />
                {errors?.email && (
            <Text color="error">Email cannot be empty.</Text>
          )}
              </Grid>

              <Grid>
                <Input
                  type="text"
                  placeholder="Enter Your Company Name"
                  value={companyname}
                  onChange={handleCompanyChange}
                />
              </Grid>
              <Grid>
                <Select
                  arrow={
                    <Box
                      as="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentcolor"
                      sx={{
                        ml: -28,
                        alignSelf: "center",
                        pointerEvents: "none",
                      }}
                    >
                      <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
                    </Box>
                  }
                  defaultValue="What is your Goal?"
                  value={whatsgoal}
                  onChange={handleWhatsGoalChange}
                >
                  <option value="What is your Goal?">What is your Goal?</option>
                  <option value="Need More Leads">Need More Leads</option>
                  <option value="Need More Contacts">Need More Contacts</option>
                  <option value="Others">Others</option>
                </Select>
              </Grid>
              <Grid>
                <Input type="text" placeholder="Others" />
              </Grid>
              <Grid>
                <Input
                  type="text"
                  placeholder="Enter your Name"
                  value={fullname}
                  onChange={handleFullNameChange}
                />
                {errors?.fullname && (
            <Text color="error">Fullname cannot be empty.</Text>
          )}
              </Grid>
              <Grid>
                <Input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={handleTitleChange}
                />
              </Grid>
              <Grid>
                <Select
                  arrow={
                    <Box
                      as="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentcolor"
                      sx={{
                        ml: -28,
                        alignSelf: "center",
                        pointerEvents: "none",
                      }}
                    >
                      <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
                    </Box>
                  }
                  defaultValue="Company Size"
                  value={companysize}
                  onChange={handleCompanySizeChange}
                >
                  <option>Company Size</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>501-1000</option>
                  <option>1001-5000</option>
                  <option>5001-1000+</option>
                </Select>
              </Grid>
              <Grid>
                <Input
                  type="tel"
                  placeholder="Mobile No."
                  value={mobile}
                  onChange={handleMobileChange}
                />
                {errors?.mobile && (
            <Text color="error">Mobile No. cannot be empty.</Text>
          )}
              </Grid>
              <Grid>
                <Button type="submit" >{buttonLabel ?? "Get Started"}</Button>
                {/* <Button type="submit">{buttonLabel ?? "Get Started"}</Button> */}
                {showSuccessMessage && (
             <Text color="success">
                Thankyou! Your Message has been delivered.
              </Text>
            )}
            {showFailureMessage && (
              <Text color="error">
                Oops! Something went wrong, please try again.
                </Text>
            )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Layout>
    </ThemeProvider>
  );
}

const styles = {
  section: {
    pt: [6, null, null, null, null, 8],
    pb: [6, null, null, 7, 11, 8],
    minHeight: 400,
    alignItems: "center",
    maxWidth: 950,
    m: ["0 auto"],
  },
  FreeConsultation: {
    backgroundColor: rgba("#F19C53", 0.2),
    h2: {
      color: "heading",
      fontSize: ["20px", null, null, "36px", "31px", 10, 36],
      lineHeight: [1.33, 1.33, 1.26, null, 1.2, 1.3],
      letterSpacing: "-1px",
      letterSpacing: "-1px",
    },
    p: {
      color: "text",
      fontSize: [2, null, null, 3],
      maxWidth: 950,
    },
    button: {
      display: "none",
    },
  },
};
