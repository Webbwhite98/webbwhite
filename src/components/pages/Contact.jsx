import React from 'react';
import {Card, CardContent, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {styled} from "@mui/system";
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const DarkCard = styled(Card)({
    backgroundColor: '#202020',
    color:'white',
});

const Contact =()=>{
    const navigate= useNavigate();
    const gitHubUrl = "https://github.com/Webbwhite98?tab=repositories"

    return(
        <Grid container  direction={'column'} alignItems={'center'} style={{minHeight:'100vh'}}>

            <Grid item xs className={'background-contact '} style={{paddingTop:'5vh', paddingBottom:'5vh'}}>
                <Grid container direction={'column'} alignItems={'center'}>
                    <Grid item xs>
                        <DarkCard>
                            <CardContent style={{textAlign:'center'}}>
                                <Typography variant="h4" gutterBottom>
                                   Thanks for visiting my website!
                                </Typography>
                                <Typography style={{paddingTop:'3vh'}} variant="subtitle1" >
                                    <Button onClick={()=>navigate("/")} variant="contained" startIcon={<HomeIcon />}>
                                       Back To Home
                                    </Button>
                                </Typography>
                            </CardContent>
                        </DarkCard>
                    </Grid>
                </Grid>
            </Grid>


           <Grid item xs style={{paddingTop:'5vh'}}>
               <Card style={{backgroundColor:'#f9f9f9'}}>
                    <Grid container direction={'row'} style={{padding:20}} spacing={7}>
                        <Grid item  >
                            <h1>Thank you so much For visiting My Website!</h1> <br/>
                            <strong>If you have any questions, concerns, or just want to reach out, My information is on this page!<br/> <br/>
                                I'll respond as quick as I can! <br/> <br/>
                                Thanks again for visiting My website!
                            </strong>
                        </Grid>

                        <Grid item  style={{textAlign:'center'}}>
                            <Grid container direction={'column'} alignItems={'center'}>
                                <Grid item xs>
                                    <Typography variant="h4">
                                        My Contact Information
                                    </Typography>
                                </Grid>

                                <Grid item xs style={{textAlign:'center'}}>
                                    {/*<ContactCard>*/}
                                        <List>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <LocalPhoneIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="+1 (803) 415-0853"

                                                    />
                                                </ListItem>

                                            <ListItem>
                                                <ListItemIcon>
                                                    <EmailIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="webbwhite1998@gmail.com"
                                                />
                                            </ListItem>


                                            <ListItem>
                                                <ListItemIcon>
                                                    <GitHubIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Link target="_blank" href={gitHubUrl} underline="none">
                                                        My GitHub Account
                                                    </Link>}
                                                />
                                            </ListItem>


                                            <ListItem>
                                                <ListItemIcon>
                                                    <FolderIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Link target="_blank" href={"https://www.keywordseogenerator.com/"} underline="none">
                                                        My Keyword Generator Website
                                                    </Link>}

                                                />
                                            </ListItem>

                                        </List>
                                    {/*</ContactCard>*/}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

               </Card>
           </Grid>

        </Grid>
    )
}
export default Contact