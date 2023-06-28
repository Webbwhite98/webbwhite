import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import {styled} from "@mui/system";

const OffWhiteCard = styled(Card)({
    backgroundColor: '#f9f9f9', // Off-white background color
    color: '#333', // Darker font color
    maxWidth: 600,
    margin: '0 auto',
    marginTop: 50,
});
const ProjectCard =(props)=>{


    return(
        <OffWhiteCard>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Languages Used:  {props.languages}
                </Typography>
                <Typography variant="body1">
                    {props.description}
                </Typography>
            </CardContent>
        </OffWhiteCard>
    )
}
export default  ProjectCard;