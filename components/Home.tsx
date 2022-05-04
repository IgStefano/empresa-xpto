import { Box, Typography, Divider } from '@mui/material';
import { StyledBox } from '../styles/Home.styled';
import CheckIcon from '@mui/icons-material/Check';
import ribbon from '../public/assets/images/empresas_ribbon.png'
import Image from 'next/image';
import { YouTube, WhatsApp, Facebook, LinkedIn, Instagram } from '@mui/icons-material/';

export default function Home() {

        return (
        <Box component="section" display="flex">
            <Box style={{width: "60%", backgroundImage: 'linear-gradient(to right, #92f075, #1fbf76)', padding: 8}}>
                <Box style={{padding: '32px 16px 16px'}}>            
                    <iframe width="760" height="350" src="https://www.youtube.com/embed/k1H4nJnmNbw" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Box>
                <Typography component="h2" style={{fontSize: 32, marginLeft: 16,}}>Apresentação da empresa</Typography>
                <Typography component="p" style={{margin: "16px 0px 8px 16px", color: "#0b582c", fontSize: 14}}>Fique por dentro de tudo em nossas redes sociais:</Typography>
                <Box style={{marginLeft: 16}} display="flex" gap="24px">
                <a href="#"><YouTube style={{color: "#0b582c"}} /></a>
                <a href="#"><Instagram style={{color: "#0b582c"}} /></a>
                <a href="#"><LinkedIn style={{color: "#0b582c"}} /></a>
                <a href="#"><Facebook style={{color: "#0b582c"}} /></a>
                <a href="#"><WhatsApp style={{color: "#0b582c"}} /></a>
                </Box>
            </Box>
            <Box style={{width: "40%", backgroundColor: "#70d499", padding: 8}}>
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
                    <Divider style={{backgroundColor: "#FFF", marginBottom: 32}} />
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
                    <Box display="flex" justifyContent="center" style={{margin: "32px 0"}}>
                    <Image src={ribbon} width="350" height="30" alt="Empresas que estão com a assessoria ativa" />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" style={{backgroundColor: "#9ce4b4", margin: "0px 48px 0px 24px", padding: "16px 32px 16px 32px"}}>
                        <Typography component="p" style={{fontWeight: "bold", fontSize: 12}}>Para quaisquer dúvidas a respeito do contrato, acesse nossa página de orçamentos para sanar todas as eventuais questões.</Typography>
                    </Box>
            </Box>
        </Box>
    )
}