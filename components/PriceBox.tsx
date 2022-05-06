import { Box, Typography } from '@mui/material'
import { Payments } from '@mui/icons-material/';
import { PriceBoxProps } from '../interfaces/props';

export default function PriceBox(props: PriceBoxProps) {

    const handleFormatValue = () => {
        const value = props.currency === 'BRL' ? props.value : ((Number(props.value.slice(0, props.value.lastIndexOf('.')).replace('.', '')) /5)).toFixed(2).toString()
        return value.replace('.', ',')
    }
    
    return (
        <Box style={{borderRadius: '24px', backgroundColor: '#dce4e4', margin: '8px', padding: '8px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Payments style={{color: "#24c474"}} />
            <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Typography style={{fontSize: '24px', fontWeight: 'bold', opacity: 0.8}} component="p">{props.currency === 'BRL' ? "R$ " : "U$ "} {handleFormatValue()}</Typography>
                <Typography component="span" style={{fontSize: "16px", fontWeight: "bold", textAlign: "end", opacity: 0.8}}>{props.paymentInterval}</Typography>
            </Box>
        </Box>
    )
}