import React, { useEffect, useState } from "react";
import { useSpotifyStateValue } from "../../store/SpotifyStateProvider";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import "./Footer.css";
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';



function Footer() {
    return ( 
        <div className="footer">
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src="https://upload.wikimedia.org/wikipedia/en/4/47/The-contours-do-you-love-me.jpg"
                    alt=""
                />
                <div className="footer__songInfo">
                    <h4>Do You Love Me</h4>
                    <p>The Contours</p>
                </div>
                <div className="footer__songInfo">
                    <h4></h4>
                    <p></p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" fontSize="large" />
                <SkipPreviousIcon className="footer__icon" fontSize="large" />
                <PauseCircleOutlineIcon className="footer__icon" fontSize="large" />
                <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
                <SkipNextIcon className="footer__icon" fontSize="large" />
                <RepeatIcon className="footer__green" fontSize="large" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid> 
            </div>
        </div>
    )
}



export default Footer;