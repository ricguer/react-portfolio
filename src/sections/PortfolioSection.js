import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ProjectCard from '../components/portfolio/ProjectCard';
import images_projectSnippets from "../assets/images/images_projectSnippets";

export default function PortfolioSection() {
    return (
        <section id="portfolioSection" style={{ paddingTop: "64px" }}>
            <Typography gutterBottom variant="h3">Portfolio</Typography>
            <Grid container spacing={5} justifyContent={"center"} alignItems={"center"}>
                <Grid>
                    <ProjectCard
                        projectTitle="Yumster"
                        projectDescription="A RESTFUL application that presents the user with recipes in an easy to read and user friendly UI and allows them to comment on their favorite recipes to add their input."
                        projectImage={images_projectSnippets[0].src}
                        projectLink="https://github.com/Titan-MP/yumster"
                        projectdeployedlink="https://ymster-3e5525cf81e8.herokuapp.com/"
                    />
                </Grid>
                <Grid>
                    <ProjectCard
                        projectTitle="Coding Quiz"
                        projectDescription="Timed coding quiz of multiple choice questions. Once the quiz is over, the user can input their initials to save their score. The application will then show the user a list of high scores saved on the browser."
                        projectImage={images_projectSnippets[1].src}
                        projectLink="https://github.com/ricguer/code-quiz"
                        projectdeployedlink="https://ricguer.github.io/code-quiz/"
                    />
                </Grid>
                <Grid>
                    <ProjectCard
                        projectTitle="Work Day Scheduler"
                        projectDescription="Simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and keep persistent memory of the scheduled work day."
                        projectImage={images_projectSnippets[2].src}
                        projectLink="https://github.com/ricguer/work-day-scheduler"
                        projectdeployedlink="https://ricguer.github.io/work-day-scheduler/"
                    />
                </Grid>
                <Grid>
                    <ProjectCard
                        projectTitle="Random Password Generator"
                        projectDescription="An application to be used to generate random passwords based on criteria selected by the user.Input validation is also incorporated in the generator."
                        projectImage={images_projectSnippets[3].src}
                        projectLink="https://www.google.com"
                        projectdeployedlink="https://ricguer.github.io/password-generator/"
                    />
                </Grid>
                <Grid>
                    <ProjectCard
                        projectTitle="Weather Dashboard"
                        projectDescription="This application retrieves weather data for cities through form inputs and calls to the OpenWeather API. As the user looks up the weather of different cities, their searches are saved for reference."
                        projectImage={images_projectSnippets[4].src}
                        projectLink="https://github.com/ricguer/weather-dashboard"
                        projectdeployedlink="https://ricguer.github.io/weather-dashboard/"
                    />
                </Grid>
                <Grid>
                    <ProjectCard
                        projectTitle="React Portfolio"
                        projectDescription="Software engineering portfolio built with React. This portfolio is a single page application that uses the Materials UI library and React components to render the page."
                        projectImage="https://picsum.photos/200/300"
                        projectLink="https://github.com/ricguer/react-portfolio"
                        projectdeployedlink="https://www.google.com"
                    />
                </Grid>
            </Grid>
        </section>
    )
};
