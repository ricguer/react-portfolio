import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ProjectCard from './components/ProjectCard';

export default function ProjectsSection() {
    return (
        <section id="portfolio">
            <Typography variant="h3">Portfolio</Typography>
            <Grid container spacing={5} justifyContent={"center"} alignItems={"center"}>
                <Grid>
                    <ProjectCard
                        projectTitle="Project 1"
                        projectDescription="This is a description of Project 1"
                        projectImage="https://picsum.photos/200/300"
                        projectLink="https://www.google.com"
                    />
                </Grid>
                <Grid>
                    <ProjectCard
                        projectTitle="Project 2"
                        projectDescription="This is a description of Project 2"
                        projectImage="https://picsum.photos/200/300"
                        projectLink="https://www.google.com"
                    />
                </Grid>
                <Grid>
                    <ProjectCard
                        projectTitle="Project 3"
                        projectDescription="This is a description of Project 3"
                        projectImage="https://picsum.photos/200/300"
                        projectLink="https://www.google.com"
                    />
                </Grid>
                <Grid>
                    <ProjectCard
                        projectTitle="Project 4"
                        projectDescription="This is a description of Project 4"
                        projectImage="https://picsum.photos/200/300"
                        projectLink="https://www.google.com"
                    />
                </Grid>
            </Grid>
        </section>
    )
};
