import { Box } from '@mui/material'
import ContactTableRow from '../components/ContactTableRow'
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'

export default function Contact() {
    return (
        <Box component="section">
            <Topbar color="#fff" background="linear-gradient(to right, #1fbf76, #92f075)">Canais de Contato e redes sociais</Topbar>
            <Box display="flex" flexDirection="column" style={{backgroundColor: "#f7f8f8", borderTop: "3px solid #9c9c9c", padding: "16px 16px 64px 16px"}}>
                    <ContactTableRow firstAddressLine='Quadra 108 Sul Alameda 8, 330 Bairro: Plano Diretor Sul' secondAddressLine='Palmas - TO, CEP: 77020-108' boxIcon="Map" boxBackground='#ececec' rowBackground="#fff" />
                    <ContactTableRow boxIcon="Facebook" boxBackground="#1877f2" rowBackground='#ececec' isLink rowText="facebook.com/XPTO" />
                    <ContactTableRow boxIcon="YouTube" boxBackground="#ff0000" rowBackground='#fff' isLink rowText="youtube.com/XPTO" />
                    <ContactTableRow boxIcon="LinkedIn" boxBackground="#0077b7" rowBackground='#ececec' isLink rowText="linkedin.com/XPTO" />
                    <ContactTableRow boxIcon="Instagram" boxBackground="linear-gradient(to right, #a131c4, #ef4d5c)" rowBackground='#fff' isLink rowText="instagram.com/XPTO" />
                    <ContactTableRow boxIcon="WhatsApp" boxBackground="#1bd741" rowBackground='#ececec' isLink rowText="https://api.whatsapp.com/send?phone=551293867383" />
                    <ContactTableRow boxIcon="PhoneEnabled" boxBackground="#8aec75" rowBackground='#fff' rowText="+55 (12) 9386-7383" />
                    <ContactTableRow boxIcon="AlternateEmail" boxBackground="#333333" rowBackground='#ececec' rowText="contato@XPTO.com" />
            </Box>
            <Footer />
        </Box>
    )
}