import { Box, Button, Typography, styled } from '@mui/material';

export const StyledContainer = styled((props: any) => <Box {...props} />)(
    () => ({
        backgroundImage: 'linear-gradient(to right, #1fbf76, #92f075)', 
        padding: "32px 32px 24px 32px", 
        textAlign: "center",
        marginTop: "16px",
        borderRadius: "32px 32px 0px 0px",
        fontWeight: "bolder",
    }),
);

export const Title = styled((props: any) => <Typography component="h2" {...props} />)(
    () => ({
        textTransform: "uppercase", 
        color: "#fff", 
        fontSize: 28,
        textShadow: "-5px 5px 5px rgba(0,0,0,0.11)"
    })
);

export const StyledButton = styled((props: any) => <Button {...props} />)(
    () => ({
        padding: "8px 64px", 
        backgroundImage: 'linear-gradient(to right, #1fbf76, #92f075)', 
        color: "#fff", 
        textTransform: "initial", 
        fontSize: 24, 
        alignSelf: "flex-end", 
        borderRadius: "8px"
    })
);

export const StyledBox = styled((props: any) => <Box {...props} />)(
    () => ({
        backgroundColor: "#fff", 
        borderRadius: "0px 0px 32px 32px", 
        height: "550px", 
        width: "100%", 
        paddingTop: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    }),
);

