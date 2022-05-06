import { Box, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { StyledPerkBox } from '../styles/PerkBox.styled';

export default function PerkBox() {
    return (
        <StyledPerkBox>
            <CheckCircleIcon sx={{fontSize: 16}} style={{color: "#24c474"}} />
            <Typography component="p" style={{textIndent: 24, fontSize: 9, opacity: 0.9, fontWeight: "bold"}}>
            Lorem ipsum dolor sit amet, consectetuer
adipiscing elit. Aenean scelerisque metus eget sem.
Suspendisse fermentum. Proin diam augue.
            </Typography>
        </StyledPerkBox>
    )
}