import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@mui/material";
import webb from '../../img/webb.JPG'
import WebbTimeLine from "../other/WebbTimeLine";
import PageTiles from "../other/PageTiles";

const Home=()=>{



    return(
            <Grid  container direction={'column'}>
                <Grid className={'background'} item xs style={{paddingTop:'15vh', paddingBottom:'10vh'}}>
                    <Grid container direction={'row'}  justifyContent={"center"}>
                        <Grid item xs={9} >
                            <Card  sx={{ display: 'flex', opacity:'.9' }}>
                                <Box sx={{ display: 'flex'}}>

                                   <Grid container direction={'row'}>
                                    <Grid item xs sx={{ flex: '1 0 auto'}}>
                                        {/*sx={{ flex: '1 0 auto'}}*/}
                                        <CardContent >
                                            <CardMedia
                                                component="img"
                                                sx={{ width: '100%', opacity:1 }}
                                                image={webb}
                                                alt="webb img"
                                            />
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                Webb White
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                       <Grid item xs>
                                           <Box sx={{ display: 'flex', alignItems: 'center'}}>

                                               <Grid container direction={'column'} style={{textAlign:"center"}}>
                                                   <Grid item xs>
                                                       <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                                                           Full Stack Software Developer
                                                       </Typography>
                                                   </Grid>
                                                   <Grid item xs>
                                                       <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                                           Proficient in React.js and Spring Boot Development
                                                       </Typography>
                                                   </Grid>
                                                   <Grid item xs>
                                                       <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                                           IT Systems Analyst II | Comporium Communications
                                                       </Typography>
                                                   </Grid>
                                               </Grid>
                                           </Box>
                                       </Grid>
                                   </Grid>
                                </Box>

                            </Card>
                        </Grid>
                        {/*<Grid item xs></Grid>*/}

                    </Grid>



                </Grid>
                <Grid item xs style={{paddingTop:'5vh', width:'100%'}}>
                        <PageTiles/>
                </Grid>

                    <Grid item xs className={'none'}>

                            <WebbTimeLine/>

                    </Grid>





            </Grid>

    )



}
export default Home
