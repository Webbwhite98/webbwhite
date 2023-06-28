import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';

const WebbTimeLine=()=>{

    return (
        <Timeline position="alternate"style={{paddingTop:'5vh'}}>
            <div style={{textAlign:'center'}}>
                <h1>My Professional Timeline</h1>
            </div>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="white"
                >
                    2016-2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={'timeline'}  sx={{ py: '60px', px: 2 }}>
                    <Typography variant="h4" component="span">
                        University of South carolina
                    </Typography>
                    <Typography>BS - Integrated Information Technology</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                >
                    2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <BugReportIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent  className={'timeline'} sx={{ py: '60px', px: 2 }}>
                    <Typography variant="h4" component="span">
                        Townsquare Interactive
                    </Typography>
                    <Typography>Quality Assurance Analyst</Typography>
                </TimelineContent>


            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                >
                    2022-Present
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <CodeIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent  className={'timeline'} sx={{ py: '60px', px: 2 }}>
                        <Typography variant="h4" component="span">
                            Comporium Communications
                        </Typography>
                        <Typography>IT Systems Analyst II</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '60px', px: 2 }}>
                    <Typography variant="h4" component="span">
                        Who Knows
                    </Typography>

                </TimelineContent>


            </TimelineItem>
        </Timeline>
    );
}
export default WebbTimeLine;