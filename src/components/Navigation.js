                                                                /* ===================== IMPORTS ====================== */
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ThemeToggle from "./app-header/ThemeToggle.js";
import React, { useState } from "react";


                                                                /* ====================== COMPONENT ====================== */
export default function Navigation() {
    const [activeButton, setActiveButton] = useState(null);     /* State of active button                                  */

                                                                /* Function to handle scroll to section                    */
    const handleClickScroll = (sectionId, buttonName) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });     /* Scroll to section                                      */
            setActiveButton(buttonName);                        /* Set active button                                      */
        }
    };

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar style={{ justifyContent: "center" }}>
                    <Button
                        color="inherit"
                        onClick={() => {
                            const element = document.getElementById("header");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                                setActiveButton("About Me");
                            }
                        }}
                        style={{ fontWeight: activeButton === "About Me" ? 'bold' : 'normal' }}
                    >
                        About Me
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => handleClickScroll("portfolioSection", "Portfolio")}
                        style={{ fontWeight: activeButton === "Portfolio" ? 'bold' : 'normal' }}
                    >
                        Portfolio
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => handleClickScroll("resumeSection", "Resume")}
                        style={{ fontWeight: activeButton === "Resume" ? 'bold' : 'normal' }}
                    >
                        Resume
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => handleClickScroll("contactSection", "Contact Me")}
                        style={{ fontWeight: activeButton === "Contact Me" ? 'bold' : 'normal' }}
                    >
                        Contact Me
                    </Button>
                    <div style={{ position: "absolute", right: 10 }}>
                        <ThemeToggle />
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );
}
