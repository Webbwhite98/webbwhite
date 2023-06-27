import React from 'react';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    IconButton,
    Stack,
    Typography
} from "@mui/material";
import * as PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
function MoreVertIcon() {
    return null;
}

const PageTiles=()=>{


    const navigate = useNavigate();

    return(
        <div className={'container'}>
            <Grid container direction={'row'} spacing={10}>
                <Grid item xs>
                    <Card   style={{backgroundColor:'#A0A0A0'}}>
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
                            <Button onClick={()=>navigate("/about")} size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs>
                    <Card style={{backgroundColor:'#A0A0A0'}}>
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
                            <Button onClick={()=>navigate("/projects")} size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs>
                    <Card   style={{backgroundColor:'#A0A0A0'}}>
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
                            <Button onClick={()=>navigate("/contact")} size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </div>


    )


}
export default PageTiles;
