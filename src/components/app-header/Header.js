import React from "react";
import Typography from '@mui/material/Typography';
import Navigation from "./Navigation.js";

export default function Header({ colorModeContext }) {
    return (
        <header>
            <Navigation colorModeContext={colorModeContext} />
            <Typography variant="h1">Ricardo Guerra</Typography>
            <Typography variant="h2">Software Engineer</Typography>
            <Typography variant="h4">Embedded Systems | Desktop Applications | Full-Stack Web Applications</Typography>
        </header>
    );
};
