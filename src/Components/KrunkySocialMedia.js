import React from 'react';
import '../KrunkySite.css';
import AppBar from '@material-ui/core/AppBar';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export const KrunkySocialMedia = () => (
    <AppBar className="app-bar-wrapper footer" position="fixed">
        <ButtonGroup color="inherit" variant="text">
            <Button href="https://www.instagram.com/jaydead.xo/"><InstagramIcon className="margin-right-2"/><span>Instagram</span></Button>
            <Button href="https://twitter.com/ludicol0"><TwitterIcon className="margin-right-2"/>Twitter</Button>
            <Button href="https://www.facebook.com/jaydeadxo"><FacebookIcon className="margin-right-2"/>Facebook</Button>
        </ButtonGroup>
    </AppBar>
);