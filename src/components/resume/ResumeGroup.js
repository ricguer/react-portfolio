                                                                /* ===================== IMPORTS ====================== */
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


                                                                /* ====================== COMPONENT =================== */
export default function ResumeGroup({ skillTitle, firstSkillDesc, secondSkillDesc, thirdSkillDesc }) {
    return (
        <article>
            <Container sx={{
                padding: '1rem',
                margin: '1rem',
            }}>
                <Typography variant="h5">{skillTitle}</Typography>
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography variant="body1">{firstSkillDesc}</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography variant="body1">{secondSkillDesc}</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography variant="body1">{thirdSkillDesc}</Typography>
                    </ListItem>
                </List>
            </Container>
        </article>
    )
};
