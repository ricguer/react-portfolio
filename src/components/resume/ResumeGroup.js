import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function ResumeGroup({ skillTitle, firstSkillDesc, secondSkillDesc, thirdSkillDesc }) {
    return (
        <article>
            <Container sx={{
                // display: 'flex',
                // flexDirection: 'column',
                // alignItems: 'center',
                // justifyContent: 'center',
                // textAlign: 'center',
                // width: '100%',
                // maxWidth: '3%',
                // height: '100%',
                // maxHeight: '500px',
                padding: '1rem',
                margin: '1rem'
            }}>
                <Typography variant="h4">{skillTitle}</Typography>
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography variant="h6">{firstSkillDesc}</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography variant="h6">{secondSkillDesc}</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography variant="h6">{thirdSkillDesc}</Typography>
                    </ListItem>
                </List>
            </Container>
        </article>
    )
};
