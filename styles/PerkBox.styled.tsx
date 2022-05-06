import { Box, styled } from '@mui/material';

export const StyledPerkBox = styled((props: any) => <Box {...props} />)(
    () => ({
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      backgroundColor: "#ecf4f4", 
      padding: "8px 12px", 
      margin: "0px 8px 8px 8px", 
      borderRadius: "8px", 
      border: "2px solid #dce4e4", 
      textAlign: "justify"
    }),
);