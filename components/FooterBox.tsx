import { Box, Typography } from '@mui/material';
import { FooterBoxProps } from '../interfaces/props';

export default function FooterBox(props: FooterBoxProps) {

    const getItems = () => {
        return props.items.map(item => <Typography style={{fontSize: "12px", color: "#fff"}} key={item}>{item}</Typography>)
    }

    return <Box display="flex" flexDirection="column" gap="4px">
        <Typography component="h4" style={{fontSize: "16px", color: "#fff", fontWeight: "bold"}}>{props.title}</Typography>
        {getItems()}
    </Box>
}