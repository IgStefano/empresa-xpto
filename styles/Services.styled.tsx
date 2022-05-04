import { Typography, styled } from '@mui/material';

export const StyledH2 = styled((props: any) => <Typography component="h2" {...props} />)(
    (props: {color: string}) => ({
      fontSize: 24,
      color: "#0b582c", 
      marginBottom: 64,
      marginTop: 16,
      borderTop: `5px solid ${props.color}`,
      width: 'fit-content'
    }),
);

export const StyledP = styled((props: any) => <Typography component="p" {...props} />)(
    () => ({
        textAlign: 'justify',
        textIndent: 64,
        marginBottom: 32,
        fontSize: 12,
        opacity: 0.6,
        width: '90%'
    }),
);