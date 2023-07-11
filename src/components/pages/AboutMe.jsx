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
                <Grid container direction={'row'} alignItems={'center'}   justifyContent="center">
                    <Grid item xs={10} style={{paddingBottom:'10vh', paddingTop:'10vh'}}>
                        <Card style={{opacity:'.9'}}>
                           <Grid container direction={'column'} spacing={2} alignItems={'center'} style={{textAlign:'center'}}>
                               <CardContent>
                              <Grid item xs >
                                      <Typography variant="h3" color="text.secondary" component="div">
                                          About Me
                                      </Typography>
                              </Grid>


                           </CardContent>
                           </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>



            <Grid item xs style={{paddingBottom:'1vh'}}>

                <OffWhiteCard>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                           My Professional Areas of Focus
                        </Typography>
                        <Typography variant="body1" paragraph>
                           Working at Comporium has allowed me to learn and excel in many areas. During my time, I have come to enjoy building DockerFiles and deploying my own applications to
                            our DEV and QA Kubernetes Clusters. Included in this is setting up Code Pipelines to ensure CI/CD for the company's applications.
                            While I manage ~50 applications, I still enjoy developing and deploying other applications.

                        </Typography>
                        <Typography variant="body1" paragraph>
                            I am a versatile full-stack developer with expertise in a wide range of technologies and frameworks.
                            My proficiency extends beyond React and Spring Boot to include Express for applications and serving production React builds.
                            I find great satisfaction in leveraging the power of Python for various tasks, such as developing Flask applications, building fast APIs,
                            and performing data cleanup work. Additionally, I have some working knowledge of PHP, which adds to my toolkit for diverse project requirements.

                        </Typography>
                        <Typography variant="body1" paragraph>
                            With my multifaceted skill set and passion for staying up-to-date with the latest industry trends,
                            I am confident in my ability to tackle complex challenges and deliver exceptional results.
                        </Typography>
                    </CardContent>
                </OffWhiteCard>

            </Grid>

            <Grid item xs style={{paddingBottom:'4vh'}}>

                <OffWhiteCard>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            A little About Myself
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Hi, my name is Webb White. I graduated from the University Of South Carolina in December 2020
                            and obtained a BS in Integrated Information Technology. I began work at Townsquare Interactive as a Quality Assurance Analyst primarily focused on websites.
                            It was here that I first gained interest in web development.
                            I then started a new role at Comporium Communications as a Full Stack Developer in December 2021.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            In my role at Comporium I initially utilized the react framework. After gaining competency using JavaScript,
                            I transitioned to using TypeScript. As my confidence increased on frontend development, I started adding SpringBoot applications.
                            This skill set enabled me to work assist and work alongside other developers on more complex projects.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Other than Software Development I enjoy being in the outdoors, spending time with my family, my girlfriend Jess, and my dog Luke!
                        </Typography>
                    </CardContent>
                </OffWhiteCard>

            </Grid>

            <Grid item xs style={{paddingBottom:'5vh'}}>
                {/*<ImageCarosuel/>*/}
            </Grid>


        </Grid>



    )

}
export default AboutMe;