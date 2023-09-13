import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ThemeToggle from "./ThemeToggle.js";
import React, { useState } from "react";

export default function Navigation({ colorModeContext }) {
    const [activeButton, setActiveButton] = useState(null);

    const handleClickScroll = (sectionId, buttonName) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveButton(buttonName);
        }
    };

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar style={{ justifyContent: "center" }}>
                    <Button
                        color="inherit"
                        onClick={() => handleClickScroll("aboutMeSection", "About Me")}
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
                        <ThemeToggle colorModeContext={colorModeContext} />
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );
}
