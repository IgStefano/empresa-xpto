import { Box, Button, Typography, Divider } from '@mui/material';
import { StyledBox } from '../styles/Home.styled';
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image';

export default function Home() {

        return (
        <Box component="section" display="flex">
            <Box style={{width: "60%", backgroundImage: 'linear-gradient(to right, #92f075, #1fbf76)', padding: 10}}>
                <Box style={{padding: 16}}>            
                    <iframe width="760" height="350" src="https://www.youtube.com/embed/k1H4nJnmNbw" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Box>
            </Box>
            <Box style={{width: "40%", backgroundColor: "#70d499", padding: 10}}>
                <Box>
                    <Typography component="h1" style={{marginRight: 32, textAlign: "right", color: "#1d262b", fontSize: 40, fontWeight: "bold"}}>A <Typography component="span" style={{color: "#0b582c", fontSize: 40, fontWeight: "bold"}}>CONSULTORIA</Typography> que Você Mais Precisa</Typography>
                    <Divider style={{backgroundColor: "#FFF"}} />
                    <Box style={{margin: '16px 0'}} display="flex" justifyContent="center" alignItems="center" gap="16px">
                        <Box>
                            <StyledBox>
                            <CheckIcon style={{color: "#889595"}} />
                        Análise de processos
                            </StyledBox>
                        </Box>

                        <Box>
                        <StyledBox>
                            <CheckIcon style={{color: "#889595"}} />
                        Dedução e solução ágil
                        </StyledBox>

                        </Box>

                        <Box>
                        <StyledBox>
                            <CheckIcon style={{color: "#889595"}} />
                        Aplicabilidade geral
                        </StyledBox>

                        </Box>
                    </Box>
                    <Divider style={{backgroundColor: "#FFF"}} />
                </Box>
                <Box style={{margin: "32px 0px"}}>
                    <ul>
                        <li style={{color: "#0b582c", fontWeight: "bold", marginBottom: "8px"}}>
                            Atuação em todo o Vale do Paraíba
                        </li>
                        <li style={{color: "#0b582c", fontWeight: "bold"}}>
                            +20 anos de atendimento Full Time
                        </li>
                    </ul>
                </Box>
                <Box>
                    <Typography component="p" style={{width: "60%", color: "#1d262b", fontWeight: "bold", marginLeft: "24px"}}>
                        Mais de 10 empresas na região estão com a nossa assessoria ativa
                    </Typography>
                    <Image src="/public/assets/images/empresas_ribbon.png" alt="Empresas com assessoria ativa" width="120" height="40" />
                </Box>
            </Box>
        </Box>
    )
}