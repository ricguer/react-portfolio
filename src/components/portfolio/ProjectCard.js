                                                                /* ===================== IMPORTS ====================== */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


                                                                /* ==================== COMPONENT ===================== */
export default function ProjectCard({ projectTitle, 
                                      projectDescription, 
                                      projectImage, 
                                      projectLink, 
                                      projectdeployedlink }) {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={projectImage}
                title="Project Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{projectTitle}</Typography>
                <Typography variant="body2">{projectDescription}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <Stack>
                    <Button size="small" href={projectLink} target="_blank" rel="noopener noreferrer">Visit Github Page</Button>
                    <Button size="small" href={projectdeployedlink} target="_blank" rel="noopener noreferrer">View Deployed Project</Button>
                </Stack>
            </CardActions>
        </Card>
    );
};
