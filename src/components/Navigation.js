import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function Navigation() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Button color="inherit">About Me</Button>
                <Button color="inherit" href="#skills">Skills</Button>
                <Button color="inherit" href="#portfolio">Portfolio</Button>
            </Toolbar>
        </AppBar>
    );
}