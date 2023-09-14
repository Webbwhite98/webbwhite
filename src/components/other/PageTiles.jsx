import React from 'react';
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const PageTiles=()=>{


    const navigate = useNavigate();

    return(
        <div className={'container'}>
            <Grid container direction={'row'} spacing={10}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card   style={{backgroundColor:'#A0A0A0'}} className={'hover-effect'} onClick={()=>navigate("/about")}>
                        <CardHeader
                            avatar={
                                <Avatar style={{backgroundColor:'#282828'}} aria-label="recipe">
                                </Avatar>
                            }

                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                About Me!
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Just a little about who I am
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button  size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card  className={'hover-effect'} style={{backgroundColor:'#A0A0A0'} } onClick={()=>navigate("/projects")}>
                        <CardHeader
                            avatar={
                                <Avatar style={{backgroundColor:'#282828'}}>
                                    <AccountTreeIcon/>
                                </Avatar>
                            }

                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Projects
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Projects I've worked on
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button  size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card  className={'hover-effect'}  style={{backgroundColor:'#A0A0A0'}} onClick={()=>navigate("/contact")}>
                        <CardHeader
                            avatar={
                                <Avatar style={{backgroundColor:'#282828'}} aria-label="recipe">
                                    <ContactPhoneIcon/>
                                </Avatar>
                            }
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Contact
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Get in touch
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button  size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </div>


    )


}
export default PageTiles;
