import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Topbar from '../components/Topbar';
import { StyledBox, StyledButton, Title } from '../styles/Quotation.styled';

export default function Quotation() {
    
    const [questionBoxText, setQuestionBoxText] = useState('')
    const handleChange = (event: any) => {
        setQuestionBoxText(event.target.value)
    }

    return (
        <Box component="section">
            <Topbar color="#1fbf76" background="#fff" currencySelect>Nossos Principais Orçamentos</Topbar>
            <Box display="flex" flexDirection="column" style={{backgroundColor: "#f7f8f8", borderTop: "3px solid #9c9c9c", padding: "0px 16px 16px 16px"}}>
                <Box display="flex"  gap="16px" flex-direction="row">
                    <Box style={{width: "100%"}}>
                        <StyledBox sx={{boxShadow: 6}}>
                            <Title>
                                Intro Plan
                            </Title>
                        </StyledBox>
                        <Box sx={{boxShadow: 6}} style={{backgroundColor: "#fff", borderRadius: "0px 0px 16px 16px", height: "400px", width: "100%"}}>

                        </Box>
                    </Box>
                    
                    <Box style={{width: "100%"}}>
                        <StyledBox>
                            <Title>
                                Standard Plan
                            </Title>
                        </StyledBox>
                        <Box sx={{boxShadow: 6}} style={{backgroundColor: "#fff", borderRadius: "0px 0px 16px 16px", height: "400px", width: "100%"}}>

                    </Box>
                    </Box>

                    <Box style={{width: "100%"}}>
                        <StyledBox>
                            <Title>
                                Master Plan
                            </Title>
                        </StyledBox>
                        <Box sx={{boxShadow: 6}} style={{backgroundColor: "#fff", borderRadius: "0px 0px 16px 16px", height: "400px", width: "100%"}}>

                        </Box>
                    </Box>

                    <Box style={{width: "100%"}}>
                        <StyledBox>
                            <Title>
                                Partner Plan
                            </Title>
                        </StyledBox>
                        <Box sx={{boxShadow: 6}} style={{backgroundColor: "#fff", borderRadius: "0px 0px 16px 16px", height: "400px", width: "100%"}}>

                        </Box>
                    </Box>
                </Box>
                <Box style={{marginTop: "16px", padding: "16px", backgroundColor: "#fff"}}>
                    <Typography component="p" style={{color:  "#1fbf76", fontSize: 20, fontWeight: "bold"}}>Alguma dúvida? <Typography component="span" sx={{color: "#1d262b", fontSize: 16, opacity: 0.7, fontWeight: 'bold'}}>Mande agora mesmo para sanar qualquer questão</Typography></Typography>
    
                    <Box display="flex" gap="16px" alignItems="center">
                        <TextField 
                        error={questionBoxText.length > 300} 
                        helperText={questionBoxText.length > 300 ? "Limite de caracteres atingido" : ''} 
                        value={questionBoxText} 
                        onChange={handleChange} 
                        label="Escreva aqui (máx. 300 caracteres)" 
                        style={{width: "50%", marginTop: "8px", borderRadius: "8px", border: "1px solid #1d262b50"}} />
                        <StyledButton>Enviar</StyledButton>
                    </Box>

                </Box>
            
            </Box>
        </Box>
    )

}