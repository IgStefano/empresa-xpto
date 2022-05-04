import { Box, Typography } from '@mui/material';
import { StyledH2, StyledP } from '../styles/Services.styled'
import LoremIpsum from '../helpers/loremipsum';


export default function Services() {
    return (
        <Box component="section" style={{backgroundImage: 'linear-gradient(to right, #92f075, #1fbf76'}}>
            <Box style={{padding: 16}}>
                <Box component="header" style={{backgroundColor: '#fff', borderRadius: 16}}>
                    <Typography component="h1" style={{fontSize: 32, textAlign: 'center', padding: 32}}>Serviços da XPTO, <Typography style={{fontSize: 16}} component="span">o que exatamente fazemos?</Typography></Typography>
                <Box display="flex" gap="16px" style={{backgroundColor: '#f7f8f8', padding: '32px 64px', borderRadius: 16}}>
                    <Box>
                    <StyledH2 color="#0b582c">
                    Matriz de rastreabilidade
                    </StyledH2>
                    <StyledP>
                    {LoremIpsum()}
                    </StyledP>
                    <StyledP>
                    {LoremIpsum()}
                    </StyledP>
                    </Box>
                    <Box>
                    <StyledH2 color="#31c281">
                    Dedução e aplicação
                    </StyledH2>
                    <StyledP>
                    {LoremIpsum()}
                    </StyledP>
                    <StyledP>
                    {LoremIpsum()}
                    </StyledP>
                    </Box>
                    <Box>
                    <StyledH2 color="#9bf480" style={{maxWidth: 205, marginBottom: 28}}>
                    Implementação da Nossa Plataforma
                    </StyledH2>
                    <StyledP>
                    {LoremIpsum()}
                    </StyledP>
                    <StyledP>
                    {LoremIpsum()}
                    </StyledP>
                    </Box>
                    <Box>
                    <StyledH2 color="#180f55">
                    Assessoria extendida
                    </StyledH2>
                    <StyledP>
                    {LoremIpsum()}
                    </StyledP>
                    <StyledP>
                    {LoremIpsum()}
                    </StyledP>
                    </Box>
                </Box>
                </Box>
            </Box>
        </Box>
    )
}