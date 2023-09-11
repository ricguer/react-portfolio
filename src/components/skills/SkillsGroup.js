import Item from "@mui/material/ListItem";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function SkillGroup({ skillTitle, firstSkillDesc, secondSkillDesc, thirdSkillDesc }) {
    return (
        <article>
            <Item>
                <Container>
                    <Typography variant="h5">{skillTitle}</Typography>
                    <List sx={{ listStyleType: 'disc', pl: 4 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography variant="body2">{firstSkillDesc}</Typography>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography variant="body2">{secondSkillDesc}</Typography>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography variant="body2">{thirdSkillDesc}</Typography>
                        </ListItem>
                    </List>
                </Container>
            </Item>
        </article>
    )
};
