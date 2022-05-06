import { YouTube, Instagram, LinkedIn, Facebook, WhatsApp } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import FooterBox from './FooterBox';
import LogoBranco from "/../public/assets/images/logo_xpto_branco.png"

export default function Footer() {
    return <Box style={{backgroundColor: "#0b582c"}}>
        <Box component="footer" display="flex" justifyContent="space-evenly" gap="16px" style={{backgroundColor: "#1fbf76", padding: "24px 32px 32px", borderRadius: "0px 0px 12px 12px"}}>
        <Box display="flex" flexDirection="column" gap="8px" style={{marginLeft: "-80px"}}>
            <Image src={LogoBranco} alt="XPTO Company" width="160px" height="32px" />
            <Typography component="span" style={{fontSize: "8px", color: "#fff"}}>
            Copyright © XPTO company 2019
            </Typography>
        </Box>
        <FooterBox title="Empresa" items={["Carreira", "Notícias", "Sustentabilidade"]} />
        <FooterBox title="Produtos" items={["Plataforma de Análise", "Plataforma Integradora"]} />
        <FooterBox title="Serviços" items={["Matriz de rastreabilidade", "Dedução e Aplicação", "Assessoria extendida"]} />
        <Box display="flex" flexDirection="column" gap="16px">
           <FooterBox title="Siga-nos" items={[]} />
           <Box>
                <Box display="flex" gap="24px">
                    <a href="#"><YouTube style={{color: "#fff", opacity: 0.4}} /></a>
                    <a href="#"><Instagram style={{color: "#fff", opacity: 0.4}} /></a>
                    <a href="#"><LinkedIn style={{color: "#fff", opacity: 0.4}} /></a>
                    <a href="#"><Facebook style={{color: "#fff", opacity: 0.4}} /></a>
                    <a href="#"><WhatsApp style={{color: "#fff", opacity: 0.4}} /></a>
                </Box>
           </Box>
        </Box>
    </Box>
            <Box display="flex" justifyContent="center" style={{padding: 16}}>
            <Typography style={{fontWeight: "bold", color: "#fff"}} component="p">
                Desenvolvido por: <Typography style={{color: "#fff"}} component="span">Igor Stefano Barbosa da Silva</Typography>
            </Typography>
        </Box>
    </Box>
}