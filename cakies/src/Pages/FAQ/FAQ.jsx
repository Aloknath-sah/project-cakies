import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '100px',
        marginBottom: '400px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        
    },
}));

export function FAQ() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <h1 style={{textAlign:"center"}} >FAQ Page</h1>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>
                1. Is it hygenic?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Yes, absolutely. Every product are made under hygenic environment with utmost cleanliness.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={classes.heading}>
                2. Will you deliver the cakes in midnight?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                A big yes, We can deliver the cakes upto 00:30 at night.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            >
            <Typography className={classes.heading}>
                3. Are you accepting credit cards?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Yes, we are accepting all types of debit and credit cards.
            </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    );
}
