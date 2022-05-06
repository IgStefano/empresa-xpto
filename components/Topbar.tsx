import { useState, Dispatch, SetStateAction } from 'react';
import { Autocomplete, Box, Typography, TextField, InputAdornment } from '@mui/material';
import Image from 'next/image';
import BR from '../public/assets/images/br.png';
import US from '../public/assets/images/us.png';
import { currencyOptions } from '../helpers/currencyOptions';
import { TopbarProps } from '../interfaces/props';

export default function Topbar(props: TopbarProps) {

    const [selectedCountry, setSelectedCountry] = useState(currencyOptions[0].country)
    props.setCurrency && props.setCurrency(selectedCountry === 'BR' ? "BRL" : "USD")

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" style={{height: 96, padding: "8px 0px", background: props.background}}>
            <Typography component="h3" style={{borderLeft: `5px solid ${props.color}`, color: props.color, fontSize: 32, padding: 16, fontWeight: 'bold'}}>
            {props.children}
            </Typography>
            {props.currencySelect && <Autocomplete
      id="Currency-select-field"
      sx={{ width: 300, marginRight: '16px' }}
      options={currencyOptions}
      defaultValue={currencyOptions[0]}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box onClick={() => setSelectedCountry(option.country)} component="li" style={{padding: 0}} sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <Box onClick={() => setSelectedCountry(option.country)} style={{padding: '6px 0px 6px 16px'}}>
          <Image 
            width="20"
            height="14"
            src={option.country === 'BR' ? BR : US}
            alt={`Bandeira ${option.country === 'BR' ? 'Brasileira' : 'Estadunidense'}`}
            style={{marginLeft: '16px'}}
          />
          </Box>
          <Typography onClick={() => setSelectedCountry(option.country)} style={{marginLeft: 8, width: '100%', padding: '6px 16px 6px 0px'}}>{option.label}</Typography> 
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
            src={selectedCountry === 'BR' ? BR : US}
            alt={`Bandeira ${selectedCountry === 'BR' ? 'Brasileira' : 'Estadunidense'}`}
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

