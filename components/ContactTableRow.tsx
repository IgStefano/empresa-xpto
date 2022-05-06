import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import { Shortcut } from '@mui/icons-material/';
import { getIcon } from '../utils/getIcon';
import { ContactTableRowProps } from '../interfaces/props';

export default function ContactTableRow(props: ContactTableRowProps) {
    return <Table>
        <TableBody>
            <TableRow>
            <TableCell style={{background: props.boxBackground, display: 'flex', justifyContent: 'center', width: "250px"}}>
                {getIcon(props.boxIcon)}
                </TableCell> 
                <TableCell style={{background: props.rowBackground, width: "100%"}}>
                    <Typography component="p" style={{fontWeight: "bold", textDecoration: `${props.isLink === true ? "underline" : "initial"}`, textAlign: "end", opacity: 0.7}}>
                    {props.firstAddressLine && props.firstAddressLine}
                    {props.rowText && props.rowText}
                    </Typography>
                    <Typography component="p" style={{textAlign: "end", opacity: 0.8}}>{props.secondAddressLine && props.secondAddressLine}
                    </Typography>
                </TableCell>
                <TableCell style={{background: props.rowBackground, width: "160px"}}>
                    <Shortcut style={{color: props.isLink ? "#b4b4b4" : props.rowBackground, fontSize: "24px"}} />
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
}