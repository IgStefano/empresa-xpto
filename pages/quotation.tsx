import { Box, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import PerkBox from '../components/PerkBox';
import PriceBox from '../components/PriceBox';
import Topbar from '../components/Topbar';
import { allPlans } from '../helpers/allPlans';
import { currencyOptions } from '../helpers/currencyOptions';
import { StyledContainer, StyledButton, Title, StyledBox } from '../styles/Quotation.styled';
import { fillArray } from '../utils/fillArray';

export default function Quotation() {
    
    const [currency, setCurrency] = useState<string>(currencyOptions[0].country === 'BR' ? 'BRL' : 'USD');
    const [questionBoxText, setQuestionBoxText] = useState('')
    const handleChange = (event: any) => {
        setQuestionBoxText(event.target.value)
    }

    const getPerks = (plan: string) => {
        let arrayLength: number[] = []
        const planToUse = allPlans?.find((currentPlan) => currentPlan.name === plan)?.numberOfPerks || 0
        fillArray(arrayLength, planToUse)
        return arrayLength.map(perks => <PerkBox key={planToUse} />)
    }

    return (
        <Box component="section">
            <Topbar color="#1fbf76" background="#fff" currencySelect setCurrency={setCurrency}>Nossos Principais Orçamentos</Topbar>
            <Box display="flex" flexDirection="column" style={{backgroundColor: "#f7f8f8", borderTop: "3px solid #9c9c9c", padding: "0px 16px 16px 16px"}}>
                <Box display="flex"  gap="16px" flex-direction="row">
                    <Box style={{width: "100%"}}>
                        <StyledContainer sx={{boxShadow: 6}}>
                            <Title>
                                Intro Plan
                            </Title>
                        </StyledContainer>
                        <StyledBox sx={{boxShadow: 6}}>
                        {getPerks('introPlan')}
                        <PriceBox value={"399.90"} currency={currency} paymentInterval="Mensais" />
                        </StyledBox>
                    </Box>
                    
                    <Box style={{width: "100%"}}>
                        <StyledContainer>
                            <Title>
                                Standard Plan
                            </Title>
                        </StyledContainer>
                        <StyledBox sx={{boxShadow: 6}}>
                        <Box>
                            {getPerks('standardPlan')}
                        </Box>
                        <PriceBox value={"1099.90"} currency={currency} paymentInterval="Mensais" />
                    </StyledBox>
                    </Box>

                    <Box style={{width: "100%"}}>
                        <StyledContainer>
                            <Title>
                                Master Plan
                            </Title>
                        </StyledContainer>
                        <StyledBox sx={{boxShadow: 6}}>
                        <Box>
                            {getPerks('masterPlan')}
                        </Box>
                        <PriceBox value={"14.299.99"} currency={currency} paymentInterval="AA" />
                        </StyledBox>
                    </Box>

                    <Box style={{width: "100%"}}>
                        <StyledContainer>
                            <Title>
                                Partner Plan
                            </Title>
                        </StyledContainer>
                        <StyledBox sx={{boxShadow: 6}}>
                        <Box>
                        {getPerks('partnerPlan')}
                        </Box>
                        <PriceBox value={"16.799.99"} currency={currency} paymentInterval="AA" />
                        </StyledBox>    
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