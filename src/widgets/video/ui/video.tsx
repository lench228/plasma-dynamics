import React from "react";

export interface VideoProps {
    video: string;
    poster: string;
    title: string;
}

export const Video = (props: VideoProps) => {
    const { video, poster, title } = { ...props };
    return (
        <div>
            <h3 className={"header-3 mb-4"}>{title}</h3>
            <video preload="none" poster={poster} src={video} controls={true} muted={true}></video>
        </div>
    );
};
