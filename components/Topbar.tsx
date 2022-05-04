import { useState } from 'react';
import { Autocomplete, Box, Typography, TextField, InputAdornment } from '@mui/material';
import Image from 'next/image';
import BR from '../public/assets/images/br.png';
import US from '../public/assets/images/us.png';

export default function Topbar(props: {children: string, color: string, background: string, currencySelect?: boolean}) {

    const currencyOptions = 
        [
            {
            currency: 'BRL',
            country: 'BR',
            label: '(R$) Brazilian Real'
            },
            {
            currency: 'USD',
            country: 'US',
            label: '(U$) American Dollar'
            },
        ]

    const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0].country)

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" style={{height: 96, padding: "8px 0px", background: props.background}}>
            <Typography component="h1" style={{borderLeft: `5px solid ${props.color}`, color: props.color, fontSize: 32, padding: 16, fontWeight: 'bold'}}>
            {props.children}
            </Typography>
            {props.currencySelect && <Autocomplete
      id="Currency-select-field"
      sx={{ width: 300, marginRight: '16px' }}
      options={currencyOptions}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box onClick={() => setSelectedCurrency(option.country)} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <Image
            width="20"
            height="14"
            src={option.country === 'BR' ? BR : US}
            alt="Bandeira"
          />
          <Typography style={{marginLeft: 8}}>{option.label}</Typography> 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
              ...params.InputProps,
            sx: {borderRadius: '12px'},
            startAdornment: (
                <InputAdornment position="start">
            <Image
            width="40"
            height="28"
            src={selectedCurrency === 'BR' ? BR : US}
            alt="Bandeira"
          />
            </InputAdornment>)    
          }}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />}
        </Box>
    )
}