import React from 'react';
import {Button, Card, CardActions, CardContent, Divider, Stack, Typography} from "@mui/material";
import * as PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";


const PageTiles=()=>{


    const navigate = useNavigate();

    return(
        <div>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >

                    <Card sx={{ minWidth: 275 }}>
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

                <Card sx={{ minWidth: 275 }}>
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
                <Card sx={{ minWidth: 275 }}>
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
            </Stack>
        </div>
    )


}
export default PageTiles;
