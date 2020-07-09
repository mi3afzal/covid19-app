import React from 'react';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Footer(){
    return (
        <div className="footer">
            <Typography variant='subtitle1' style={{color: '#cecece'}} >Developed By</Typography>
            <Typography variant='h5' style={{color: 'white'}}>Muhammad Irfan Afzal</Typography>
            <div className="social">
                <a href="https://github.com/mi3afzal/" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="socialIcon" />
                </a>
                <a href="https://www.facebook.com/mi3afzal/" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon className="socialIcon" />
                </a>
            </div>
        </div>
    )
}
