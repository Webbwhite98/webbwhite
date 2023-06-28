import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import {styled} from "@mui/system";
import ProjectCard from "../other/ProjectCard";


const Projects=()=>{

    return(
        <Grid container direction={'column'} spacing={4} style={{paddingTop:'5vh'}}>

            <Grid item xs className={'background-projects parallax'}>
                <Grid container direction={'row'} alignItems={'center'}   justifyContent="center" >
                    <Grid item xs={5} style={{paddingBottom:'10vh', paddingTop:'10vh'}}>
                        <Card>
                            <Grid container direction={'column'} spacing={2} alignItems={'center'}>
                                <CardContent>
                                    <Grid item xs >
                                        <Typography variant="h1" color="text.secondary" component="div">
                                            Projects
                                        </Typography>
                                    </Grid>
                                </CardContent>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs style={{textAlign:'center'}}>
                <h2>Here are some of my Work and Personal Projects</h2>
            </Grid>


            <Grid item xs style={{paddingLeft:'5%', paddingRight:'5%'}}>

                <Grid container direction={'row'} spacing={4}>

                    <Grid item xs={4}>
                        <ProjectCard
                            title={'Mobile Scanning App'}
                            languages={"JS - React, Java - SpringBoot"}
                            description={"Mobile Web Application using a React frontend and SpringBoot backend. The application uses the phone camera and" +
                                "the zxing dependency to read barcodes from the live stream of the users camera. " +
                                "The sole purpose of the application was for Technicians to be able to read and capture Barcodes of Internet devices such as modems " +
                                "and routers so the Technician could remove and add a router or modem to a Customer's Account while out in the field. This application used MSAL authentication."}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <ProjectCard
                            title={'POS Admin App'}
                            languages={"TS - React, Java - SpringBoot"}
                            description={" Web Application using a React frontend and SpringBoot backend. This application allowed our Help Desk team the ability to" +
                                "change and add permissions for users, create Cashier Stations by 'assembling' a computer, a credit card reader, and a receipt printer." +
                                " The user could also add and delete all the options individually. The main purpose of this application was to register the Veriphone Card Readers" +
                                "with WorldPay (our commerce company). This application used MSAL authentication."}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ProjectCard
                            title={'AutoDraft Registration App'}
                            languages={"JS - React, Java - SpringBoot"}
                            description={"Web Application using a React frontend and SpringBoot backend. This application was added to our POS System as an Iframe so that our Cashiers" +
                                "and Call Center workers were able to create an Auto Draft registration for a customer using bank or credit card info. This was an interesting application" +
                                " because I figured out how to bundle the frontend into the Jar file using a multi-stage DockerFile so we would only have one instance on our app server."}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ProjectCard
                            title={'Statistics for Salesforce App'}
                            languages={"Python - Flask"}
                            description={"Mobile Web Application using a Python's Flask framework. The Application showed statistics for a SalesForce application the company used." +
                                "Mainly it was used for setting phone numbers for MFA across multiple environments, Viewing number of users for licensing purposes as well as clearing out tickets " +
                                "within the SalesForce application. This application used MSAL authentication."}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <ProjectCard
                            title={'Repair Ticketing App'}
                            languages={"TS - React"}
                            description={" Web Application using a React frontend that made requests to SpringBoot applications. This Application was specificaly used for repair tickets. The application" +
                                " assigned, created, dispatched repair tickets. The application was for internal use but it allowed the company to manually send out technicians to a customers home to" +
                                " fix any issues the customer may have. This application used MSAL authentication."}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ProjectCard
                            title={'Repair Ticketing Closing Form'}
                            languages={"JS - Express"}
                            description={"Web Application using a Express and Handlebars. This application was to act as a closing form for our Repair Ticketing application. While that was its main purpose," +
                                " it also searched a users email (via MS Graph) for the tickets they had been assigned to and displayed them. This application used MSAL authentication."}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ProjectCard
                            title={'Google Extension For Call Center wait times'}
                            languages={"JS, PHP"}
                            description={"Google Extension that fetches JSON from a PHP application. The PHP application ran on a cron job to clear data from a table and load it from another table." +
                                "The Sole purpose of this was so that Call Center Employees knew the wait times of other areas inside the call center using phone data. The Database the PHP app " +
                                " connected to was MySQL."}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ProjectCard
                            title={'MFA Enforcement For SalesForce Application'}
                            languages={"Python - Flask"}
                            description={"To obtain Phone numbers for 200+ users, I created a page on a Flask Application that listed out all users and a field to add or update a phone number." +
                                " This update would add the phone number across all application environments the user existed in. The Project was successfull and MFA was added before the enforcement date."}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ProjectCard
                            title={'Application Upgrade from React 16 to React 18'}
                            languages={"JS - React"}
                            description={"This purpose of this project was to upgrade the react version of a ticketing application so the application could use MSAL Authentication." +
                                " While doing the version upgrade, I switched the 40 + React Classes to Functional Components."}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ProjectCard
                            title={'Ticketing Application Frontend & Power Automate backend'}
                            languages={"JS - React, Power Automate"}
                            description={"This project was to create a ticketing application for a few different ticket types. The frontend had to display tickets so they could be updated, " +
                                "dispatched, and closed. Unfortunately at the time, I did not know java very well so I used Power Automate flows to update the sharepoint 'database'. I did end up " +
                                " rewriting the backend in java."}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ProjectCard
                            title={'Supported Application Upgrade'}
                            languages={"Perl"}
                            description={"This project was to get an outsourced application upgraded to a version that supported oAuth2 ahead of the microsoft changes to end basic authentication." +
                                " I along with a team of coworkers did overnight upgrades to our DEV, QA, and eventually Production environment to get the application added with no real downtime."}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <ProjectCard
                            title={'SEO Keyword Generator'}
                            languages={"JS - React, AWS - Amplify"}
                            description={"This personal project was to mess around with OpenAi and text generation based off a prompt. The application took in a company name, city, and state and generated keywords" +
                                " using openAI integrations. It Was deployed via AWS amplify and had a contact form that sent information to my websites email"}
                        />
                    </Grid>



                </Grid>

            </Grid>

        </Grid>
    )


}
export default Projects