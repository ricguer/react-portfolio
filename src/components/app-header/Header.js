                                                                /* ====================== IMPORTS ===================== */
import React from "react";
import Typography from '@mui/material/Typography';


                                                                /* ====================== COMPONENT =================== */
export default function Header() {
    return (
        <header id="header">
            <div className="App-header">
                <Typography variant="h1">Ricardo Guerra</Typography>
                <Typography variant="h3">Software Engineer</Typography>
                <Typography variant="h5">Embedded Systems | Desktop Applications | Full-Stack Web Applications</Typography>
            </div>
        </header>
    );
};
