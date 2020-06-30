import React from 'react';
import '../../KrunkySite.css';
import ReactPlayer from "react-player/twitch";

export const StreamPanel = () => {
    return (
        <>
            <div className="stream-wrapper">
                <ReactPlayer
                    url="https://www.twitch.tv/krunkyxo"
                    width="70vw"
                    height="calc(70vw * 0.5)"
                />
            </div>
        </>
    );
}