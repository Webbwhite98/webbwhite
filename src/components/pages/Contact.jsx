import React from 'react';
import {Card, Grid} from "@mui/material";

const Contact =()=>{


    return(
        <Grid container style={{height:'100vh'}} direction={'column'} alignItems={'center'}>
           <Grid item xs style={{paddingTop:'5vh'}}>
               <Card style={{height:'50%'}}>
                   <div >
                       <div style={{paddingTop: '5%', paddingLeft:'2%'}} className={'row'}>
                           <div className={'col'}>
                               <h1>Thank you so much For visiting My Website!</h1> <br/>
                               <strong>If you have any issues, questions, or concerns, use the Contact Us form on this page.<br/> <br/>
                                   Our Team will reach out to you as soon as we can. <br/> <br/>
                                   Thanks again for visting our website!
                               </strong>
                           </div>
                           <div className={'col'}>
                               <div className={'container-sm'}>
                                   <div style={{marginBottom:'5%'}} className={'contact'}>
                                       <div className={'row'}>
                                           <div style={{textAlign:'center', marginBottom:'2%', marginTop:'2%'}} className={'col'}>
                                               <h1>Contact Me</h1>
                                           </div>
                                       </div>

                                       <div className={'row'}>
                                           <div style={{marginBottom:'2%'}} className={'col'}>
                                               {/*<input style={err && !name? {boxShadow:' 0 0 9px red'}:null} value={!name? '': name} placeholder={'Name *'} onChange={(e)=>setName(e.target.value)} className={'form-control'} required/>*/}
                                           </div>
                                       </div>
                                       <div className={'row'}>
                                           <div style={{marginBottom:'2%'}} className={'col'}>
                                               {/*<input style={err && !email? {boxShadow:' 0 0 9px red'}:null} value={!email? '': email} placeholder={'Email *'} onChange={(e)=>setEmail(e.target.value)} className={'form-control'} required/>*/}
                                           </div>
                                       </div>
                                       <div className={'row'}>
                                           <div style={{marginBottom:'2%'}} className={'col'}>
                                               {/*<textarea  v placeholder={'Message *'}  className={'form-control'} required/>*/}
                                           </div>
                                       </div>

                                       <div style={{textAlign:'center'}} className={'row '}>
                                           {/*<div style={{ paddingBottom:'5%'}} className={'col'}>*/}
                                           {/*    <button style={{width:'50%'}} type="primary" loading={loading} onClick={()=>{setErr(false); sendEmail()}}>*/}
                                           {/*        Send*/}
                                           {/*    </button>*/}
                                           {/*    /!*<button style={{width:'50%'}} onClick={()=>sendEmail()} className={'btn btn-primary'}>Send</button>*!/*/}
                                           {/*</div>*/}
                                       </div>
                                   </div>
                               </div>

                           </div>
                       </div>
                   </div>
               </Card>
           </Grid>

        </Grid>
    )
}
export default Contact