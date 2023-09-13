import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ThemeToggle from "./ThemeToggle.js";
import React, { useRef } from "react";

export default function Navigation({ colorModeContext }) {

    return (
        <AppBar position="sticky">
            <Toolbar style={{ position: "relative", justifyContent: "center" }}>
                <Button color="inherit">About Me</Button>
                <Button color="inherit">Portfolio</Button>
                <Button color="inherit">Resume</Button>
                <Button color="inherit">Contact</Button>
                <div style={{ position: "absolute", right: 10 }}>
                    <ThemeToggle colorModeContext={colorModeContext} />
                </div>
            </Toolbar>
        </AppBar>
    );
}