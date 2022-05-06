import { 
    Map, 
    YouTube, 
    WhatsApp, 
    Facebook, 
    LinkedIn, 
    Instagram, 
    PhoneEnabled, 
    AlternateEmail,
} from '@mui/icons-material/';

export const getIcon = (boxIcon: string) => {
        if (boxIcon === 'Map') return <Map style={{fontSize: 48}}/>
        if (boxIcon === 'Facebook') return <Facebook style={{fontSize: 48, color: '#fff'}}/>
        if (boxIcon === 'WhatsApp') return <WhatsApp style={{fontSize: 48, color: '#fff'}}/>
        if (boxIcon === 'Instagram') return <Instagram style={{fontSize: 48, color: '#fff'}}/>
        if (boxIcon === 'LinkedIn') return <LinkedIn style={{fontSize: 48, color: '#fff'}}/>
        if (boxIcon === 'YouTube') return <YouTube style={{fontSize: 48, color: '#fff'}}/>
        if (boxIcon === 'PhoneEnabled') return <PhoneEnabled style={{fontSize: 48}}/>
        if (boxIcon === 'AlternateEmail') return <AlternateEmail style={{fontSize: 48, color: '#fff'}}/>   
    }