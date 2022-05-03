import { Box, Button, Tabs, Tab, styled } from '@mui/material';

export const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      classes={{scroller: 'invisible'}}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  });
  
  export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    () => ({
      textTransform: 'none',
      color: '#1d262b',
      fontWeight: 600,
      opacity: 0.9,
      fontSize: 16,
      '&.Mui-selected': {
        color: '#1fbf76',
        fontWeight: 'bold'
      },
      '&.Mui-disabled': {
        color: '#1d262b'
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#92f075',
      },
      ':hover': {
        color: '#92f075',
      },
    }),
  );
  
  export const StyledBox = styled((props) => <Box {...props} />)(
      () => ({
        backgroundColor: '#f7f8f8', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '24px 48px', 
        borderRadius: '0px 0px 32px 32px', 
      }),
  );

  export const StyledButton = styled((props) => <Button variant="outlined" {...props} />)(
    () => ({
      backgroundImage: 'linear-gradient(to right, #92f075, #1fbf76)',
      color: "#180f55",
      borderRadius: "0px 32px 32px 32px",
      textTransform: 'none',
      fontWeight: "bolder",
      padding: "0px 24px",
      height: 36,
      fontSize: 14,
    }),
);