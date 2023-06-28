import React from 'react';
import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import { styled } from '@mui/system';
import ImageCarosuel from "../other/ImageCarosuel";

const OffWhiteCard = styled(Card)({
    backgroundColor: '#f9f9f9', // Off-white background color
    maxWidth: 1000,
    marginTop: 50,
    padding: 20,

});
const AboutMe=()=>{



    return(
        <Grid container direction={'column'} spacing={4} alignItems={'center'} style={{paddingTop:'8vh'}}>
            <Grid item xs className={'background-about'} >
                <Grid container direction={'row'} alignItems={'center'}   justifyContent="center" >
                    <Grid item xs={5} style={{paddingBottom:'10vh', paddingTop:'10vh'}}>
                        <Card style={{opacity:'.9'}}>
                           <Grid container direction={'column'} spacing={2} alignItems={'center'}>
                               <CardContent>
                              <Grid item xs >
                                      <Typography variant="h3" color="text.secondary" component="div">
                                          About Me
                                      </Typography>
                              </Grid>

                                   <Grid item xs>
                                       <Typography variant="subtitle1" color="text.secondary" component="div">
                                           Webb White
                                       </Typography>
                                   </Grid>

                           </CardContent>
                           </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>



            <Grid item xs style={{paddingBottom:'8vh'}}>

                <OffWhiteCard>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                           A little About Myself
                        </Typography>
                        <Typography variant="body1" paragraph>
                           Hi, My name is Richard Webb White. I go by my middle name, Webb. I attended
                            the University Of South Carolina and obtaining a Bachelor of Science in Integrated Information Technology.
                            Within a couple of Months of graduation, I was starting at Townsquare Interactive as a
                            Quality Assurance Analyst doing manual Quality Assurance for Websites. I worked at Townsquare Interactive from February 15th, 2021 to
                            December 18th, 2021. I have since worked at Comporium Communications as a Full Stack Developer.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            At Comporium I first learned the React framework. After getting a hang of it using JavaScript, I started using TypeScript.
                            Once I felt like I had a handle on Frontend Development, I started building SpringBoot Applications for my frontends. This then turned into
                            me helping our backend developers work on bigger and bigger projects.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Other than Software Development I enjoy being in the outdoors, spending time with my family, my girlfriend Jess, and my dog Luke!
                        </Typography>
                    </CardContent>
                </OffWhiteCard>

            </Grid>

            <Grid item xs style={{paddingBottom:'5vh'}}>
                <ImageCarosuel/>
            </Grid>


        </Grid>



    )

}
export default AboutMe;