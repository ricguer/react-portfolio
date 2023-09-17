                                                                /* ===================== IMPORTS ====================== */
import React from "react";
import Typography from "@mui/material/Typography";

                                                                /* ====================== COMPONENT =================== */
export default function AboutMeSection() {
    return (
        <section id="aboutMeSection" style={{ paddingTop: "64px" }}>
            <Typography gutterBottom variant="h3">About Me</Typography>
            <Typography variant="h6">
                I am a software engineer with a passion for creating
                software that is functional, extensible and visually
                appealing. I have experience with embedded systems,
                desktop applications, and full-stack web
                applications. One of my greatest strengths is my
                ability to bridge the gap between different software
                domains. I bring the precision and optimization
                skills I practice in embedded systems to desktop and
                web development, ensuring that my software is not
                only functional but also efficient and reliable.
            </Typography>
        </section>
    );
}