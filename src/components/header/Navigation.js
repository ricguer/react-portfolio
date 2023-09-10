import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ThemeToggle from "./ThemeToggle.js";

export default function Navigation({ colorModeContext }) {
    return (
        <AppBar position="sticky">
            <Toolbar style={{ position: "relative", justifyContent: "center" }}>
                <Button color="inherit">About Me</Button>
                <Button color="inherit">Skills</Button>
                <Button color="inherit">Portfolio</Button>
                <div style={{ position: "absolute", right: 10 }}>
                    <ThemeToggle colorModeContext={colorModeContext} />
                </div>
            </Toolbar>
        </AppBar>
    );
}