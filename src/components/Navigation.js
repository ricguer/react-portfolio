import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

export default function Navigation() {
    return (
        <AppBar position="sticky">
            <Toolbar style={{ justifyContent: "center" }}>
                <Button color="inherit">About Me</Button>
                <Button color="inherit">Skills</Button>
                <Button color="inherit">Portfolio</Button>
            </Toolbar>
        </AppBar>
    );
}
