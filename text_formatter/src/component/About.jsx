import React from 'react'
import {Accordion,AccordionSummary,Typography,AccordionDetails}  from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
export default function About() {


    let myStyle={

        textAlign:"center",
        alignItems:"center",

        marginTop:"5%"

    }
    return (
        <div>

           <h1 style={myStyle}>This is a text utility project made while learning React js
           Here you can check your your typing speed also</h1> 
           <Accordion>
        <AccordionSummary
       
          expandIcon={<ExpandMoreIcon />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "gray"
          }}
        >
          <Typography>UpperCase</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           It converts the written text to capital letters.All alphabets are converted to upperCase.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>LowerCase</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           It converts the written text to small letters.All alphabets are converted to lowerCase.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>ClearText</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
         It deleted the whole text written in text area.
        </Typography>
      </AccordionDetails>
    </Accordion>
    
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>LetterToUC</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
       It converts the first letter of each word of text to upperCase.
      </Typography>
    </AccordionDetails>
  </Accordion>
  
  <Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    <Typography>CopyText</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
     It copies the whole text written.
    </Typography>
  </AccordionDetails>
</Accordion>

  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Remove Spaces</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It remove the extra space written if any.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    
     
        

        </div>
    )
}
