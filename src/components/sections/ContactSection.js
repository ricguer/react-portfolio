                                                                /* ===================== IMPORTS ====================== */
import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";


                                                                /* ====================== COMPONENT =================== */
export default function ContactSection() {
    const [name, setName] = useState("");                       /* State variables - name                               */  
    const [email, setEmail] = useState("");                     /* State variables - email                              */
    const [message, setMessage] = useState("");                 /* State variables - message                            */

                                                                /* Event handler for form submission                    */
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section id="contactSection" style={{ paddingTop: "64px" }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
                    <Typography variant="h3" align="center" mb={2}>
                        Contact Me
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                            type="email"
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            margin="normal"
                            required
                            multiline
                            rows={4}
                        />
                        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                            Submit
                        </Button>
                    </form>
                </Box>
            </Box>
        </section>
    );
}