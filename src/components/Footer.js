                                                                /* ====================== IMPORTS ====================== */
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";


                                                                /* ====================== COMPONENT =================== */
export default function StickyFooter() {
    return (
        <footer style={{ position: 'relative', bottom: 0, left: 0, right: 0 }}>
            <Box
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                    p: 2
                }}
                component="footer"
            >
                <Container maxWidth="sm">
                    <IconButton color="inherit" href="https://github.com/ricguer"
                        target="_blank" rel="noopener noreferrer" sx={{ marginLeft: 1, marginRight: 1 }}>
                        <GitHubIcon sx={{
                            fontSize: 60
                        }} />
                    </IconButton>
                    <IconButton color="inherit" href="https://www.linkedin.com/in/ricardo-guerra/"
                        target="_blank" rel="noopener noreferrer" sx={{ marginLeft: 1, marginRight: 1 }}>
                        <LinkedInIcon sx={{
                            fontSize: 60
                        }} />
                    </IconButton>
                </Container>
            </Box>
        </footer>
    );
}