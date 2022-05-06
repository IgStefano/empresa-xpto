import { Box, Typography } from '@mui/material';
import { SetStateAction, Dispatch } from 'react'
import { StyledBox, StyledButton, StyledTabs, StyledTab } from '../styles/Navbar.styled';
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {

    return (
        <Box component="header" style={{backgroundImage: "linear-gradient(to right, #92f075, #70d499)"}}>
            <StyledBox component="nav"W>
                <Box>
                    <Image src="/../public/assets/images/logo_xpto_color.png" alt="XPTO Company" width="160px" height="32px" />
                </Box>
                <Box sx={{display: 'flex', gap: '32px'}}>
                <StyledTabs aria-label="Tabs for XPTO Company">
          <Link href="/services">
             <StyledTab label="Serviços" />
          </Link>
          <Link href="/quotation">
            <StyledTab label="Orçamentos" />
          </Link>
          <Link href="/contact">
            <StyledTab label="Contato" />
          </Link>
            <StyledTab disabled label="Login" />
        </StyledTabs>
        <Box display="flex" flexDirection="column" >
            <Typography component="span" sx={{fontSize: 10, fontWeight: "bold", opacity: 0.2}}>Comece por aqui</Typography>
            <StyledButton sx={{boxShadow: 10}}>
                Getting Started
            </StyledButton>
        </Box>
                </Box>
      </StyledBox>
        </Box>
    )
}